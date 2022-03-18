<template>
  <div class="container gap error">
    <h3 class="error-text mb24">Página não encontrada :(</h3>
    <router-link class="back-to-home" to="/">Voltar para home</router-link>
  </div>
</template>

<script>
export default {
  name: "Error404",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
.error .error-text {
  color: crimson;
}
.error .back-to-home {
  padding: 0.5rem;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  background-color: #e72b45;
  text-decoration: dashed;
}
.error .back-to-home:hover {
  background-color: #e72b44d3;
}
</style>
