<template>
  <section class="container gap">
    <div class="proposal-content">
      <h2>Tudo em um minuto! Explicação rápida da nossa proposta.</h2>

      <video class="video" controls>
        <source src="../../assets/videos/z1minuto.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: "Proposal",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.proposal-content {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.proposal-content .explanation-video {
  width: 50rem;
  height: 30rem;
  border-radius: 0.5rem;
}
@media (max-width: 800px) {
  .proposal-content .explanation-video {
    width: 19rem;
    height: 19rem;
  }
}
@media (max-width: 300px) {
  .proposal-content .explanation-video {
    width: 15rem;
    height: 15rem;
  }
}
</style>
