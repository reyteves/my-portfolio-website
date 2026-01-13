<template>
  <section id="contact" class="py-5 bg-gradient-section-dark">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h2 class="display-5 fw-bold text-white">Contact</h2>
        </div>
      </div>

      <div class="row justify-content-center g-5">
        <div class="col-12 col-md-6" data-aos="fade-right" data-aos-duration="1000">
          <!-- Google Maps Embed -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30869.80897918934!2d121.02633214999999!3d14.74233595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1f1383336eb%3A0x492f2541512c5a4!2sCaloocan%20City%20Hall%20North!5e0!3m2!1sen!2sph!4v1718246980133!5m2!1sen!2sph"
            height="450" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" class="w-100 rounded shadow-sm"></iframe>
        </div>

        <div class="col-12 col-md-6" data-aos="fade-left" data-aos-duration="1000">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="fullName" class="form-label visually-hidden">First Name M.I. Last Name</label>
              <input type="text" class="form-control form-control-lg" id="fullName" v-model="form.fullName" placeholder="Name">
            </div>

            <div class="mb-3">
              <label for="email" class="form-label visually-hidden">Email</label>
              <input type="email" class="form-control form-control-lg" id="email" v-model="form.email" placeholder="Email">
            </div>

            <div class="mb-4">
              <label for="message" class="form-label visually-hidden">Message</label>
              <textarea class="form-control form-control-lg" id="message" rows="5" v-model="form.message" placeholder="Message"></textarea>
            </div>

            <div class="row justify-content-center align-items-center g-4" data-aos="fade-in" data-aos-duration="1000">
              <div class="col-auto">
                <button type="submit" class="btn btn-lg px-4 text-white btn-gradient" :disabled="isSubmitting">
                  <span v-if="isSubmitting">
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Submitting...
                  </span>
                  <span v-else>Submit</span>
                </button>
              </div>
              <div class="col-auto">
                <a href="https://www.linkedin.com/in/rey-jesus-teves-62b393100/" target="_blank" class="text-decoration-none">
                  <i class="devicon-linkedin-plain colored fs-3 tool-icon"></i>
                </a>
              </div>
            </div>
            
            <div class="d-flex justify-content-end mt-3">
              <div class="g-recaptcha" data-sitekey="6LdbdUksAAAAAHH80K5Ye_EeubJnTHq3uAXWjlYx"></div>
            </div>
          </form>

          <div v-if="showAlert" class="alert alert-success mt-4" role="alert">
            <i class="bi bi-check-circle me-2"></i>
            {{ alertMessage }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const WEB3FORMS_ACCESS_KEY = "07ada775-4cc0-4877-8aa6-55deb652253c"

const form = ref({
  fullName: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const showAlert = ref(false)
const alertMessage = ref('')

const notyf = new Notyf()

const handleSubmit = async () => {
  const response = grecaptcha.getResponse();
  if (response.length === 0) {
    notyf.error("Please complete the captcha");
    return;
  }
  
  isSubmitting.value = true
  
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: form.value.fullName,
        email: form.value.email,
        message: form.value.message,
        "g-recaptcha-response": response,
      }),
    })
    
    const result = await res.json()
    
    if (result.success) {
      console.log(result)
      grecaptcha.reset()
      form.value = {
        fullName: '',
        email: '',
        message: ''
      }
      isSubmitting.value = false
      notyf.success("Message sent successfully")
    } else {
      console.error('Submission failed:', result)
      isSubmitting.value = false
      notyf.error(result.message || "Message failed to send")
    }
  } catch (error) {
    console.log(error)
    isSubmitting.value = false
    notyf.error("Message failed to send")
  }
}
</script>
