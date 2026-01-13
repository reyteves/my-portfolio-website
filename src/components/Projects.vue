<template>
  <section id="projects" class="py-5 bg-gradient-section-dark">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h2 class="display-5 fw-bold text-white">My Projects</h2>
        </div>
      </div>
      
      <div class="row justify-content-center g-4">
        <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.json';
</script>
