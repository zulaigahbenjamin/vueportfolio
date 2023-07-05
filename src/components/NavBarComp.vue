<template>
    <nav>
      
      <ul>
        
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About </router-link></li>
        <li><router-link to="/testimonials">Testimonials</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact </router-link></li> 
       <li><button @click="goToContactPage" class="hire-me">Hire Me</button></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .hire-me{
    background-color:rgba(162, 162, 233, 0.582);
    color:rgb(0, 0, 0); 
    border-radius: 5px;
    padding:8px;
    /* margin-left: 80px;  */
    float:right;
    
    margin-top: 0;

  }
  nav {
    background-color: #ffffff;
    color: black;
    padding: 10px;
    height:40px;
    text-align: center;
    font-size: larger;
   
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    display:flex;
  }
  li:hover {
    color:blue;
  }
  
  li {
    margin-right: 10px;
  }
  
  a {
    color: #0b0b0b;
    text-decoration: none;
  }
  
  router-link:hover {
    text-decoration: underline;
    color: rgb(0, 0, 0);
    padding:10px;
  }
  </style>
  <script>
export default {
  methods: {
    goToContactPage() {
      this.$router.push('/contact');
    }
  }
}
</script>
  