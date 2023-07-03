<template>
  <section class="about-section">
    <div class="pic">
      <img src="https://i.postimg.cc/6qmwS691/IMG-2409-3.jpg" alt="image of myself" />
    </div>
    <div class="more-info">
      <p>
        ihwrt03 4htirq3u3i4hthqwrifhqrrhtoqhtut09ueerrfhhbdiuhao4ht3q4uth
      </p>
    </div>
  </section>

  <!-- <div class="testimonial-carousel">
    <div class="carousel-container">
      <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ active: index === activeIndex }"
        class="testimonial-slide">
        <div class="testimonial-content">
          <p>{{ testimonial.message }}</p>
          <p class="testimonial-author">{{ testimonial.author }}</p>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prevSlide" class="carousel-control-prev">Prev</button>
      <button @click="nextSlide" class="carousel-control-next">Next</button>
    </div>
  </div> -->
</template>
<script>
export default {
  // data() {
  //   return {
  //     activeIndex: 0,
  //     testimonials: []
  //   }
  // },
  // methods: {
  //   prevSlide() {
  //     this.activeIndex = (this.activeIndex === 0) ? this.testimonials.length - 1 : this.activeIndex - 1;
  //   },
  //   nextSlide() {
  //     this.activeIndex = (this.activeIndex === this.testimonials.length - 1) ? 0 : this.activeIndex + 1;
  //   }
  }

</script>
<style scoped>
.about-section {
  display: flex;
  margin-top:80px;
    
}
.pic {
margin-left: 10%;
}
.more-info {
  margin-left:10%;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 5%;
  object-fit: cover;
  margin-top: 20px;
}

/* .testimonial-carousel {
  text-align: center;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;
}

.testimonial-slide {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.testimonial-slide.active {
  opacity: 1;
  visibility: visible;
}

.testimonial-content {
  padding: 20px;
}

.carousel-controls {
  margin-top: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  border: none;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}

.carousel-control-prev {
  margin-right: 10px;
}

.carousel-control-next:hover,
.carousel-control-prev:hover {
  background-color: #555;
}*/
</style>  


