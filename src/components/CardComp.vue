<template>
    <router-link :to="{name: 'testimonials', 
    params:{id: testimonial.id}}" class="cardbody">
        <img :src="testimonial.image"/>
        <h3>{{ testimonial.name }}</h3>
        <p>{{ testimonial.occupation }}</p>
        <p>{{ testimonial.content }}</p>
    </router-link>
</template>
<script>
export default {
    props: ["testimonial"],
    methods: {
        logger(){
            requestAnimationFrame(this.logger)
            console.log(this.testimonial);
        },
    },
    mounted() {
        // this.logger()
    },
}
</script>
<style scoped>
img {
    width:fit-content;
    height:500px;
}
* {
  text-decoration:none;
  color: black;
}
p {
   justify-content: center;
    width: 400px;
    font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.cardbody {
   border-radius:2px;
   padding:10px;
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    margin:20px;
    font-size: medium;
    text-align:center;
    width: 400px;
    margin-left:100px;
}

</style>