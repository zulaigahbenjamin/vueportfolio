<template>
  <h1>Get In Touch With Me!</h1>
  <div class="contact-page">
    <div class="contact-form">
      <h1>Contact Form</h1>
      <div>
        <label>Your Full Name</label>
        <input type="text" class="me" placeholder="Enter Your Full Name" />
      </div>
      <div>
        <label>Email Adress</label>
        <input type="text" class="me" placeholder="Enter Your Email" />
      </div>
      <label>Message</label><br />
      <input type="text" class="me" placeholder="Type your message please" />
      <br />
      <button @click="submit" type="button">Submit</button>
    </div>
    <div class="contact-details">
      <h1>My Details</h1>
      <font-awesome-icon icon="fa-solid fa-envelope" style="color: #000000" />
      <p>Zulaigah Benjamin</p>
      <p>Email: zulaigahbenjamin01@gmail.com</p>
      <p>Phone: +1 123-456-7890</p>
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
button {
  margin-top: 20px;
  size: 50px;
}

template {
  font-size: larger;
}
.me {
  margin: 20px;
}
input {
  border-radius: 4px;
  padding: 10px;
}

.contact-page {
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  font: larger;
}

.contact-details {
  margin-right: 5px;
  margin-left: 20%;
  padding: 20px;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);

  border-radius: 8px;
  width: 100%;
}

.contact-form {
  border-radius: 8px;
display:flex;
flex-direction:column;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  height: 500px;
  margin-left: 5%;
  width: 100%;
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
