<!-- <template>
  <div>
    <h1 class="typewriter">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      index: 0,
      speed: 100, // Speed in milliseconds
      text: 'Welcome to my portfolio'
    };
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      if (this.index < this.text.length) {
        this.message += this.text.charAt(this.index);
        this.index++;
        setTimeout(this.typeWriter, this.speed);
      }
    }
  }
};
</script>

<style scoped>
.typewriter {
  display: inline-block;
  overflow: hidden;
  animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  color:black;
  
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
}
</style> -->

<template>
  <div>
    <h1 class="slide-in">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome to my portfolio'
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
</style>

