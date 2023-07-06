<template>
 <div>
    <h1 class="slide-in">{{ message }}</h1>
  </div>
  <!-- <h1>Welcome to my web developer portfolio!</h1> -->
  <section class="about-section">
    
    <div class="pic">
      <img src="https://i.postimg.cc/6qmwS691/IMG-2409-3.jpg" alt="image of myself" />
    </div>
    <div class="more-info">
      <p>
        I'm passionate about creating engaging and user-friendly websites that
        leave a lasting impression. With a keen eye for design and a knack for
        problem-solving, I strive to bring my clients' visions to life through
        elegant and functional web solutions.
      </p>
      <div>
        <p>
          Beyond my love for coding and web development, I find solace in the
          world of books. I enjoy immersing myself in different genres and
          expanding my knowledge through reading. It fuels my creativity and
          keeps me inspired to explore new ideas and techniques in my work.
        </p>
        <p>
          Connecting with friends and fellow developers is something I truly
          cherish. I value collaboration and believe in the power of sharing
          knowledge and experiences. Working together and exchanging ideas not
          only improves my skills but also creates a supportive community where
          we can learn and grow together.
        </p>
        <p>
          While I thrive on social interaction, there are times when I
          appreciate solitude and introspection. Being an introvert, I find
          solace in moments of quiet reflection. These moments allow me to
          recharge and approach challenges with a fresh perspective.
        </p>
        <p>
          I invite you to explore my portfolio and discover the projects that
          showcase my dedication, creativity, and technical expertise. If you
          have any questions or would like to discuss potential collaborations,
          feel free to reach out. I look forward to connecting with you!
        </p>
        <p>Thank you for visiting!</p>
        <p>Zulaigah</p>
      </div>
      

    </div>
   
  </section>
  
 <button @click="goToResumePage" class="resume">Check My Resume Out !</button>
  <div class="containers">
    <div class="wrapper">
      <div class="container" v-for="(value, key) in currentValues" :key="key"><br>
        <span class="num">{{ value }}</span>
        <span class="text"><br><br>{{ getText(key, value) }}</span><br />
      </div>
    </div>
  </div>
  <main>
    <div class="brands">
      <h1>Brands I've Worked With</h1>
      <img class="pic" src="https://i.postimg.cc/655LFW0R/life-choices.png">
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    goToResumePage() {
      this.$router.push('/resume');
    }
  },
  data() {
    return {
      message: 'Welcome to my web developer portfolio!',
      currentValues: {
        experience: 0,
        projectsCompleted: 0,
        positiveFeedback: 0,
      },
      endValues: {
        experience: 1,
        projectsCompleted: 20,
        positiveFeedback: 80,
      },

    };
  },
  mounted() {
    this.animateValueDisplays();
  },
  methods: {
    animateValueDisplays() {
      Object.keys(this.endValues).forEach((key) => {
        const endValue = this.endValues[key];
        const duration = Math.floor(this.interval / endValue);
        let startValue = 0;

        const counter = setInterval(() => {
          startValue += 1;
          this.currentValues[key] = startValue;

          if (startValue === endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
    },
    getText(key, value) {
      // Map the key to the corresponding text
      const texts = {
        experience: "Experience",
        projectsCompleted: "Projects Completed",
        positiveFeedback: "Positive Feedback",
      }

      if (key === "value") {
        return value + "%";
      }

      return texts[key];
    },
  }
  }
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
.pic {
  width: 500px;
  height: 400px;
  margin-bottom: 50px;
}
button {
  width: 200px;
  height:50px;
  margin:20px;
}

.containers {
  display: flex;
  justify-content: center;
  align-items: center;

}

.wrapper {
  display: flex;
}

.container {
  margin: 10px;
  text-align: center;
  font-size: larger;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding-left: 80px;
}

.num {
  display: grid;
}

.text {
  display: flex;
}

.containers {
  background-color: #f5f5f5;
  height: 100%;
}

.about-section {
  display: flex;
  background-color: #f5f5f5;
}

.pic {
  margin-left: 5%;
}

.more-info {
  margin-left: 5%;
  text-align: left;
  margin-bottom: 20px;
}

img {
  width: 250px;
  height: 300px;
  border-radius: 5%;
  object-fit: cover;
  margin-top: 20px;
}</style>
