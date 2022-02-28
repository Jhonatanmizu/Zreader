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
}
.mb24 {
  margin-bottom: 1.5rem;
}
.mb60 {
  margin-bottom: 3.75rem;
}
</style>
<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>
