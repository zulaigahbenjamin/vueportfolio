
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
    <slide v-if="testimonial" class="testimonial-deatails">
        <img :src="testimonial.image_url" :alt="testimonial.name">
        <h3>{{ testimonial.name }}</h3>
        <p>{{ testimonial.occupation }}</p>
        <p>{{ testimonial.content }}</p>
    </slide>
    </carousel>
    <TestimonialCarousel/>
  </template>


  <script>
  
  export default {
    components: { TestimonialCarousel},
      props: ['id'],
    //   data() {
    //     return {
    //         testimonial: null
    //     }
    //   },
    //   mounted() {
    //     fetch('https://zulaigahbenjamin.github.io/jsonfile/data.json' + this.id)
    //       .then(res => res.json())
    //       .then(data => this.testimonial = data)
    //       .catch(err => console.log(err.message))
    //   },

    mounted () {
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
  .testimonial-details {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
   
  }
  </style>