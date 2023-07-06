<template>
   <div>
    <h1 class="slide-in">{{ message }}</h1>
  </div>
  <h1>Get In Touch With Me!</h1>

  <div class="contact-page">
    <div class="contact-form">
      <form action="https://formspree.io/f/xleyedrk" method="POST">
        <h1><i class="fa-regular fa-address-book" style="color: #0d0d0d;"></i> Contact Me </h1>
        <div>
          <label>Your Full Name</label><br />
          <input type="text" name="name" class="me" placeholder="Enter Your Full Name" /><br />
        </div>
        <br />
        <br />
        <div>
          <label>Email Address</label><br />
          <input type="text" name="email" class="me" placeholder="Enter Your Email" required /><br>
        </div>
        <br />
        <br />
        <div>
          <label>Subject</label><br />
          <input type="text" name="subject" class="me" placeholder="Whats the Subject" /><br />
        </div>
        <br />
        <br />
        <div>
          <label>Message</label><br />
          <input type="text" name="message" class="my" placeholder="Type your message please" />
        </div>
        <br />
        <button type="submit" name="submit">Submit</button>
      </form>
    </div>

    <div class="contact-details">
      <h1>My Details</h1>
      <p><i class="fa-solid fa-user" style="color: #000000;"> </i> Name: Zulaigah Benjamin</p>
      <p><i class="fa-solid fa-envelope" style="color: #000000;"></i> Email: zulaigahbenjamin01@gmail.com</p>
      <p><i class="fa-solid fa-phone" style="color: #000000;"></i> Phone: 074 342 8180</p>
      <img class="meagain" src="https://i.postimg.cc/25PLP53k/IMG-2409-3.jpg">
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/js/all.js";

export default {
  name: "ContactPage",
  data() {x
    return {
      message: 'Get In Touch With Me !'
    };
  }


};
</script>

<style scoped>
.slide-in {
  animation: slideIn 1s forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
h1 {
  margin-bottom: 40px;
}
.meagain {
  height: 400px;
  border-radius: 90px;
  width: 300px;
}
label {
  float: left;
}
.my {
  float: left;
  width: 100%;
  height: 100px;
  color: black;
}
button {
  margin-top: 20px;
  size: 50px;
  float: left;
  height: 40px;
  width: 80px;
  background-color: rgba(162, 162, 233, 0.582);
  border: none;
  border-radius: 7px;
}
template {
  font-size: larger;
}
.me {
  width: 100%;
}
input {
  border-radius: 4px;
  padding: 10px;
  float: left;
  background-color: rgb(195, 192, 192);
  color: black;
}
.contact-page {
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  font: larger;
}
.contact-details {
  margin-right: 20px;
  margin-left: 60px;
  padding: 20px;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 100%;
  height: 640px;
}
.contact-form {
  border-radius: 8px;
  flex-direction: column;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  height: 600px;
  margin-left: 20px;
  width: 100%;
  padding: 40px;
}
</style>


