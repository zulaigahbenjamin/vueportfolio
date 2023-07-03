<template>
    <footer>
      <div class="footer-container">
        <p>&copy; 2023 Zulaigah Benjamin</p>
        <div class="social-icons">
          <a href="https://github.com/yourusername" class="sl" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" class="sl" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" class="sl" target="_blank">
            <i class="fab fa-twitter"></i>
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
    width:20%;

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
  </style>
  