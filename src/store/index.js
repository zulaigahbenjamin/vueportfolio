import { createStore } from 'vuex'
const dataProjects = "https://zulaigahbenjamin.github.io/jsonfile/data.json"
export default createStore({

  // state: {
  //   testimonials: null,
  //   testimonial: null,
  // },
  // /*projects*/
  // state: {
  //   projects: null,
  //   data:null,
  // },

  state: {
    projects: null,
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
    /*projects*/
    setProjects: (state, projects) => {
      state.projects = projects;
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
    /*projects*/
    async fetchProjects(context) {
      try {
        let response = await fetch(dataProjects)
        let {projects} = await response.json()
        context.commit("setProjects", projects)
      }
      catch(error){
        alert(error.message)
      }
    }
    // getProjects: async (context) => {
    //   fetch('https://zulaigahbenjamin.github.io/jsonfile/data.json')
    //   .then((res) => res.json())
    //   .then((data) => context.commit('setProjects', data.projects));
    // },
    // async fetchData(context) {
    //   try {
    //     const response = await fetch("http://localhost:8080/data");
    //     const data = await response.json();
    //     context.commit("setData", data);
    //   } catch (error) {
    //     context.commit("setError", error.message);
    //   }
    // },
  }
})
