<template>
  <footer class="py-4 bg-gradient-primary text-white">
    <div class="container">
      <div class="row text-center align-items-center gy-3">
        <!-- Column 1: Name -->
        <div class="col-12 col-lg-4 text-lg-start">
          <p class="mb-0 fs-5 fw-bold">Rey Jesus Teves</p>
        </div>
        <!-- Column 2: Title -->
        <div class="col-12 col-lg-4">
          <p class="mb-0 fw-normal">Full Stack Developer</p>
        </div>
        <!-- Column 3: Copyright -->
        <div class="col-12 col-lg-4 text-lg-end">
          <p class="small mb-0 opacity-75 fw-light">&copy; All Rights Reserved, 2025</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Back to Top Button -->
  <a href="#menu" class="btn text-white position-fixed bottom-0 end-0 m-3 rounded-circle py-2 px-3 btn-gradient" id="back-to-top">
    <i class="bi bi-arrow-up"></i>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
