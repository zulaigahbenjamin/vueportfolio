
<template>
  <!-- <div v-if="job">
      <h1>{{ testimonial.title }}</h1>
      <p>The testimonial id is {{ testimonial.id }}</p>
      <h1>{{ testimonial.details }}</h1>
    </div>
    <div v-else>
      <p>Loading  </p>
    </div> -->
  <carousel>
    <slide v-if="testimonial" class="testimonial-details">
      <div class="card-body">
          <img :src="testimonial.image_url" :alt="testimonial.name" :class="pic">
      <h3>{{ testimonial.name }}</h3>
      <p>{{ testimonial.occupation }}</p>
      <p>{{ testimonial.content }}</p>
      </div>
    
    </slide>
  </carousel>
  <TestimonialCarousel />
</template>


<script>

export default {
  components: { TestimonialCarousel },
  props: ['id'],
  
  mounted() {
    this.$store.dispatch("getTestimonial", this.id)
  },
  computed: {
    tutorial() {
      return this.$store.state.testimonial
    }
  },
}
</script>
<style>
* {
  text-decoration:none;
}
img {
  width: 10px;
}
template{
  text-decoration: none;
}
.testimonial-details {
border: 2px solid black;
}
.card-body {
  border: 2xp solid black;
}
</style>