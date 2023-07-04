<template>
    <footer>
      <div class="footer-container">
        <p>&copy; 2023 
          <a href="https://github.com/zulaigahbenjamin/vueportfolio.git">Vue.js Portfolio.</a>
         Developed by Zulaigah Benjamin</p>
        <div class="social-icons">
          <a href="https://github.com/yourusername" class="sl" target="_blank">
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" class="sl" target="_blank">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://twitter.com/yourusername" class="sl" target="_blank">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    height:fit-content;
  }
  .sl {
    padding-left:20px;
    width:50px;
    height:-500px;

  }
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .social-icons {
    margin-top: 10px;
    width:50%;
    
  }
  
  .social-icons  {
    color: pink;
    /* margin: 0 5px; */
    text-decoration: none;
    width:20%;
  }
  
  .social-icons a:hover {
    color: #ccc;
  }
  a {
    color:white;

  }
  a:hover {
    color:pink;
  }
  </style>
  