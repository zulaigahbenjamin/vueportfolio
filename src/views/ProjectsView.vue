 <template>
    <div class="projects">
      <h2>Projects</h2>
      <Carousel :navigation-enabled="true" :navigation-next-label="'Next'" :navigation-prev-label="'Previous'">
        <div v-for="project in projects" :key="project.name">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <p>Technologies Used: {{ project.technologies }}</p>
        </div>
      </Carousel>
    </div>
  </template>
  
  <script>
  import Carousel from '@/components/ProjectCarousel.vue';
  
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        projects: [
          {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: 'HTML, CSS, JavaScript',
          },
          {
            ame: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: 'HTML, CSS, JavaScript',
          },
        {
            ame: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: 'HTML, CSS, JavaScript',
        }
          // Add more projects as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* .carousel {
    /* Your custom styles 
  } */
  </style>


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
  
  
