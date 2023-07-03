<template>
    <!-- <div>
      <carousel>

        <slide v-for="testimonial in testimonials" :key="testimonial.name">
          <img {{ testimonial.image }}/>
          <h3>{{ testimonial.name }}</h3>
          <p>{{ testimonial.occupation }}</p>
          <p>{{ testimonial.content }}</p>
        </slide>
      </carousel>
    </div> -->
<carousel>
    <div v-if="testimonials" class="flex-container">
      <CardComp v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
    </div>
    <div v-else>Loading...</div>
    </carousel>
  </template>
  
  <script>
  
  import CardComp from '@/components/CardComp.vue'
  export default {
    components: { CardComp },
    
    // data() {
    //   return {
    //     testimonials: []
    //   }
    // },
    computed : {
      testimonials() {
        return this.$store.state.testimonials
      }
    },
    mounted() {
      this.$store.dispatch('getTestimonials')
    },
    // methods: {
    //   fetchTestimonials() {
    //     // Fetch testimonials from the JSON file
    //     fetch('https://zulaigahbenjamin.github.io/jsonfile/data.json')
    //       .then(response => response.json())
    //       .then(data => {
    //         this.testimonials = data
    //       })
    //       .catch(error => {
    //         console.error('Error fetching testimonials:', error)
    //       })
    //   }
    // }
  }
  </script>
  <style scoped>
.flex-container {
  display:grid;
  grid-template-columns:  (2,1fr);
}
</style>
  