<template>
  <Header></Header>

  <router-view />
  <Footer></Footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
:root {
  --gap: 1rem;
  --primary-color: #e72b45;
  --secondary-color: #fff;
  --light-bg: #f2f2f2;
  --gradient-color: linear-gradient(
      270deg,
      #c10c25 50%,
      rgba(231, 43, 69, 0) 81.68%
    ),
    #f0565c;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.gap {
  padding: var(--gap);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
}
h1 {
  font-size: 2.25rem;
}
body {
  font-family: "Oswald", sans-serif;
  font-size: 1.25rem;
  scroll-behavior: smooth;
}
.mb24 {
  margin-bottom: 1.5rem;
}
.mb60 {
  margin-bottom: 3.75rem;
}
.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}
.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}
.alt-bg {
  background-color: var(--light-bg);
}
.video {
  width: 35rem;
  height: 19.25rem;
  border-radius: 1.25rem;
}
@media screen and (max-width: 1000px) {
  .video {
    width: 20rem;
    height: 15rem;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>
