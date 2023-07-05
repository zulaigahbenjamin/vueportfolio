 <!-- <template>
  <div class="carousel">
    <div class="carousel-container" :style="carouselStyle">
      <div
        class="carousel-slide"
        v-for="(item, index) in items"
        :key="index"
        :style="slideStyle(index)"
      >
       Content for each carousel slide
        <h3>{{ item.image }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="carousel-navigation">
      <button @click="prevSlide" class="carousel-nav-button">Previous</button>
      <button @click="nextSlide" class="carousel-nav-button">Next</button>
    </div>
  </div>
  <router-link :to="{name: 'projects', params:{id:project.id}}">
  <img :src="project.image">
  <h2>{{ project.description }}</h2>
  <p>{{ project.github-link }}</p>
  <p>{{ firebase-link }}</p>
  </router-link>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 300px; /* Adjust the height as needed */
}

.carousel-container {
  display: flex;
  position: relative;
  height: 100%;
  perspective: 1000px; /* Adjust the perspective for 3D effect */
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  transition: opacity 0.3s;
}

.carousel-slide-active {
  z-index: 1;
  opacity: 1;
}

.carousel-navigation {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-nav-button {
  margin: 0 5px;
}
</style>
  

  
 <template>
  <div class="carousel">
    <div class="carousel-container" :style="containerStyle">
      <div
        class="carousel-slide"
        v-for="(item, index) in items"
        :key="index"
        :style="slideStyle(index)"
      >
       Content for each carousel slide 
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="carousel-navigation">
      <button @click="prevSlide" class="carousel-nav-button">Previous</button>
      <button @click="nextSlide" class="carousel-nav-button">Next</button>
    </div>
  </div>
</template> 

<script>
export default {
  props: ['projects'],
  data() {
    return {
      items: [
        { image: 'https://i.postimg.cc/25PLP53k/IMG-2409-3.jpg', 
        description: 'Description for Slide 1' 
      },
        { image: 'https://i.postimg.cc/25PLP53k/IMG-2409-3.jpg', 
        description: 'Description for Slide 2' 
      },
        // Add more carousel items as needed
      ],
      currentIndex: 0,
      rotation: 0,
      translateZ: -250,
    };
  },
  computed: {
    containerStyle() {
      return `transform: perspective(1000px) rotateY(${this.rotation}deg);`;
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.rotation += 60;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.rotation -= 60;
    },
    slideStyle(index) {
      const slideRotation = (index - this.currentIndex) * 60;
      return `transform: rotateY(${slideRotation}deg) translateZ(${this.translateZ}px);`;
    },
    logger(){
      requestAnimationFrame(this.logger)
      console(this.project);
    }
  },
  mounted (){
    //this.logger
  }
};
</script>
 -->
 <!-- <template>
  <router-link :to="{name: 'projects', 
  params:{id:project.id}}">
      <img :src="project.image"/>
      <h3>{{ project.name }}</h3>
      <p>{{ project.occupation }}</p>
      <p>{{ project.content }}</p>
  </router-link>
</template>
<script>
export default {
  props: ["project"],
  methods: {
      logger(){
          requestAnimationFrame(this.logger)
          console.log(this.project);
      },
  },
  mounted() {
      // this.logger()
  },
}
</script>
<style scoped>

</style> -->

<template>
  <div class="container">
        <div class="card" v-for="project in projects" :key="project.id">
            <div class="card-body">
                <h2>{{ projects.name }}</h2>
                <img :src="projects.imageUrl" :alt="projects.name">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["testimonial"],

}
</script>
<style scoped>

</style>