<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->

<template>
  <div class="home-page">
    <div class="container">
      <h1>Welcome to My Portfolio</h1>
      <p>Passionate web developer creating user-friendly and engaging websites.</p>
      <router-link to="/about" class="btn">Check Me Out !</router-link>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding-top:30px;
   height: 100vh;
 /* display: flex; */
  background-color: #f5f5f5;
}

.container {
  text-align: center;
  justify-content: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

.btn {
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #555;
}
</style>
