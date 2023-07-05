<template>
  <h1>Get In Touch With Me!</h1>

  <div class="contact-page">
    <div class="contact-form">
      <form action="https://formspree.io/f/xdovyoez" method="POST">
        <h1><i class="fa-regular fa-address-book" style="color: #0d0d0d;"></i> Contact Me </h1>
        <div>
          <label>Your Full Name</label><br />
          <input type="text" for="name" class="me" placeholder="Enter Your Full Name" /><br />
        </div>
        <br />
        <br />
        <div>
          <label>Email Address</label><br />
          <input type="text" for="email" class="me" placeholder="Enter Your Email" required/><br>
        </div>
        <br />
        <br />
        <div>
          <label>Subject</label><br />
          <input type="text" for="subject" class="me" placeholder="Whats the Subject" /><br />
        </div>
        <br />
        <br />
        <div>
          <label>Message</label><br />
          <input type="text" for="message" class="my" placeholder="Type your message please"/>
        </div>
        <br />
        <button @click="submit" type="button">Submit</button>
      </form>
    </div>

    <div class="contact-details">
      <h1>My Details</h1>
      <p><i class="fa-solid fa-user" style="color: #000000;">  </i>  Name: Zulaigah Benjamin</p>
      <p><i class="fa-solid fa-envelope" style="color: #000000;"></i> Email: zulaigahbenjamin01@gmail.com</p>
      <p><i class="fa-solid fa-phone" style="color: #000000;"></i> Phone: 074 342 8180</p>
      <img  class="meagain" src="https://i.postimg.cc/25PLP53k/IMG-2409-3.jpg">
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/js/all.js";

export default {
  name: "ContactPage",
};
</script>

<style scoped>
h1 {
  margin-bottom: 40px;
}
.meagain {
  height:400px;
  border-radius: 90px;
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
  border:none;
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

<!-- <template>
 <body>
    <h1>Contact Form</h1>
    <form accept-charset="UTF-8" method="POST">
      <div class="form-fields">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-fields">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-fields">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">Send message</button>
    </form>
  </body>
</template>

<style scoped>
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .form-fields {
    margin-bottom: 1rem;
  }
  label { 
    display: block; 
    margin-bottom: 4px; 
    font-weight: bold; 
    font-size: 0.9rem;
  }
  input[type="text"], input[type="email"], textarea {
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 6px 10px;
    border-radius: 4px;
  }
  body { display: block }
  button[type="submit"] { 
    background-color: rgb(67 56 202);
    color: white;
    font-size: 0.8rem;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 500;
  }
  .form-fields {
    
  }
</style> -->
