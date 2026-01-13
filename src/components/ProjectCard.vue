<template>
  <div class="card h-100 border-0 shadow-lg rounded-4 project-card card-glass">
    <div class="card-img-top p-4 d-flex justify-content-center align-items-center project-card-img-container" data-aos="zoom-in" data-aos-duration="500">
      <img :src="project.image" class="img-fluid project-card-img" :alt="project.title">
    </div>
    <div class="card-body">
      <h5 class="card-title fw-bold text-primary-dark mb-3">{{ project.title }}</h5>
      <p class="card-text text-secondary-blue small">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>