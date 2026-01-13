<template>
  <section id="landing">
    <section class="py-5 bg-gradient-section-light">
      <div class="container py-5">
        <div class="row align-items-center">

          <div class="col-12 col-lg-4 text-center mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
            <div class="d-inline-block project-card card-glass rounded-circle p-2">
              <img src="/images/my-picture.jpg" alt="A portrait of Rey Jesus Teves"
                class="img-fluid rounded-circle profile-picture">
            </div>
          </div>

          <div class="col-12 col-lg-8">
            <div class="card h-100 border-0 shadow-lg rounded-4 project-card card-glass">
              <div class="card-body p-4 p-lg-5 text-center text-lg-start">
                <h1 class="display-4 fw-bold text-primary-dark" data-aos="fade-left"
                  data-aos-duration="1000">Rey Jesus Teves</h1>

                <p class="lead text-primary-dark fw-normal mb-4">Full Stack Developer</p>

                <p class="text-secondary-blue">
                  I am a full-stack developer with experience in both front-end and back-end
                  development. I work with HTML, CSS, and JavaScript to build user-friendly and
                  reliable websites. If you need a web designer and computer programmer, I can
                  assist you. Let's discuss this.
                </p>
                <!-- Call to action button -->
                <a href="#contact" class="btn btn-lg mt-3 text-white btn-gradient">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
</script>

<style scoped>
.profile-picture {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#landing h1:hover {
    cursor: default;
    text-shadow: 2px 2px 8px rgba(52, 86, 139, 0.3);
}
</style>
