 <!-- <template>
     <div class="projects">
      <h2>Projects</h2>
      <div v-if="projects" class="flex-container">
        <Carousel v-for="project of projects" :key="project.id" :project="project" >
         
          <div v-else>Loading...</div>
      </Carousel>
      </div>
    </div> 
    <div v-if="projects" class="flex-container">
      <Carousel v-for="project of projects" :key="project.id" :project="project"/>
    </div>
    <div v-else>Loading...</div>
  </template>
  
  <script>
  import ProjectCarousel from '@/components/ProjectCarousel.vue';
  
  export default {
    components: {
      ProjectCarousel,
    },
    data() {
      return {
        projects: [],
      };
    },
    computed : {
      projects() {
        return this.$store.state.projects
      }
    },
    mounted() {
      this.$store.dispatch('getProjects')
    }
  };
  </script>
  
  <style scoped>
  /* .carousel {
    /* Your custom styles 
  } */
  </style> -->


  <!-- <template>
    <div>
     
  
      <Carousel :items="carouselItems" />
    </div>
  </template>
  
  <script>
  import Carousel from '../components/ProjectCarousel.vue';
  
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        carouselItems: [
          {
            title: 'https://i.postimg.cc/05HLkgR1/IMG-2409.jpg',
            description: 'Description for Slide 1',
          },
          {
            image:'https://i.postimg.cc/05HLkgR1/IMG-2409.jpg',
            description: 'Description for Slide 2',
          },
          // Add more carousel items as needed
        ],
      };
    },
  };
  </script> 

 <template>
    <div id="example">
      <carousel-3d :controls-visible="true" :clickable="false">
      </carousel-3d>
    </div>
  </template>
  
  <script>
   import ProjectCarousel from '../components/ProjectCarousel.vue'
  
  export default {
    components: { ProjectCarousel}
  };
  </script> -->
  
<template>
  <div v-if="projects">
    <ProjectCarousel :project="projects" />
  </div>
  <div v-else>loading...projects not ready</div>
</template>
<script>
import ProjectCarousel from '../components/ProjectCarousel.vue'
export default {
  computed: {
    projects() {
      return this.$store.state.project
    }
  },
  mounted() {
    this.$store.dispatch('getProjects');
  },
  components: { ProjectCarousel }
}
</script>
<style scoped>
img {
  width: 70px;
  height: 70px;
  border-radius: 70px;
}
</style>
