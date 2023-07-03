<template>
    <h1>Get In Touch With Me!</h1>
    <div class="contact-page">
        <div class="contact-form">
            <h1>Contact Form</h1>
            <label>Your Full Name</label><br>
            <input type="text" class="me" placeholder="Enter Your Full Name">
            <br>
            <label class="me" >Email Adress</label><br>
            <input type="text" class="me" placeholder="Enter Your Email">
            <br>
            <label >Message</label><br>
            <input type="text" class="me" placeholder="Type your message please">
            <br>
            <button @click="submit" type="button">Submit</button>
        </div>
        <div class="contact-details">
            <h1>My Details</h1>
            <font-awesome-icon icon="fa-solid fa-envelope" style="color: #000000;"/><p>Zulaigah Benjamin</p>
            <p>Email: zulaigahbenjamin01@gmail.com</p>
            <p>Phone: +1 123-456-7890</p>
        </div>
    </div>
</template>
  
<script>
import '@fortawesome/fontawesome-free/js/all.js';

export default {
    name: "ContactPage",
};
</script>
  
<style scoped>
button {
    margin-top:20px;
    size:50px;
}
template {
     font-size: larger;
}
.me {
   margin:20px;
  
}
input {
    border-radius: 4px;
    padding:10px;
    
}
label {
    margin-left:-100px;
}
.contact-page {
    display: flex;
    margin-top:20px;
    margin-bottom:50px;
    font:larger;
}

.contact-details {
    /* flex: 1; */
    margin-right: 5px;
    margin-left:20%;
    padding:20px;
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    /* border: 2px solid black; */
    border-radius: 8px;
    width:100%;
}

.contact-form {
     /* flex: 2;  */
    /* border: 2px solid black; */
    border-radius: 8px;
    font-size: larger;
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    margin-bottom:20px;
    height: 390px;
    margin-left:5%;
    width:100%;
}
</style>