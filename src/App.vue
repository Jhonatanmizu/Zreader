<template>
  <Header></Header>
  <router-view />
</template>

<style>
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
  max-width: 980px;
  width: 90%;
}
</style>
<script>
import Header from "./layout/Header.vue";

export default {
  components: { Header },
};
</script>
