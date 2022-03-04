<template>
  <div class="container gap error">
    <h1 class="error-text">Página não encontrada :(</h1>
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
</style>
