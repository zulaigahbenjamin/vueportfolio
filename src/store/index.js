import { createStore } from 'vuex'

export default createStore({
 
    state: {
      testimonials: null,
      testimonial: null,
    },

 
  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setTestimonial: (state, testimonial) => {
      state.testimonial = testimonial;
    },

  },
  actions: {
    getTestimonials: async (context) => {
      fetch('https://zulaigahbenjamin.github.io/jsonfile/data.json')
      .then((res) => res.json())
      .then((data) => context.commit("setTestimonials", data.testimonials));
    },
    getTestimonial: async (context, id) => {
      fetch("https://zulaigahbenjamin.github.io/jsonfile/data.json" + id)
      .then((res) => res.json())
      .then((testimonial) => context.commit("setTestimonial", testimonial));
    },   
    }
})
