<template>
  <section class="games">
    <Title title="Jogos " />
    <div class="container gap"></div>
  </section>
</template>

<script>
import Title from "../components/shared/Title.vue";

export default {
  name: "Games",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: { Title },
};
</script>

<style scoped>
.games {
  min-height: 100vh;
}
</style>
