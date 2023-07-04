<template>
  <h1>Welcome to my web developer portfolio!</h1>
  <section class="about-section">
    <div class="pic">
      <img
        src="https://i.postimg.cc/6qmwS691/IMG-2409-3.jpg"
        alt="image of myself"
      />
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
  <div class="container">
 
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  background-color:#f5f5f5;
  height: 90px;
}
.about-section {
  display: flex;
}
.pic {
  margin-left: 5%;
}
.more-info {
  margin-left: 5%;
  text-align: left;
  margin-bottom:20px;
}
img {
  width: 250px;
  height: 300px;
  border-radius: 5%;
  object-fit: cover;
  margin-top: 20px;
}
</style>
