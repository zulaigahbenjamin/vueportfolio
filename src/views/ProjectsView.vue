<template>
  <div class="container">
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="box-3">
        <div class="btn btn-three">
          <div class="card-body">
            <h2>{{ project.name }}</h2>
            <img :src="project.image" :alt="project.name">
            <p>{{ project.description }}</p>
            <p>{{ project.github - link }}</p>
            <p>{{ project.netlify - link }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}

img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
}
.btn-three {
  color: #363333;
  transition: all 0.5s;
  position: relative;
}
.btn-three::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(122, 115, 115, 0.1);
  transition: all 0.3s;
}

.btn-three:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}

.btn-three::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(138, 69, 69, 0.5);
  transform: scale(1.2, 1.2);
}

.btn-three:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
</style>
