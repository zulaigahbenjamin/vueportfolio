<template>
    <router-link :to="{name: 'testimonials', 
    params:{id: testimonial.id}}">
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

</style>