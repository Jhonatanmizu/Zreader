<template>
  <section class="container gap">
    <div class="proposal-content">
      <h2>Tudo em um minuto! Explicação rápida da nossa proposta.</h2>
      <iframe
        class="explanation-video"
        src="https://www.youtube.com/embed/On_kXK8uIjM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
@media (max-width: 600px) {
  .proposal-content .explanation-video {
    width: 19rem;
    height: 19rem;
  }
}
@media (max-width: 400px) {
  .proposal-content .explanation-video {
    width: 15rem;
    height: 15rem;
  }
}
</style>
