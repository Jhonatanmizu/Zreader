<template>
  <section class="container gap">
    <div class="proposal-content">
      <div class="title-container">
        <h2>Nossa proposta</h2>
        <i class="fa-solid fa-book-open"></i>
      </div>
      <span>Tudo em um minuto! Explicação rápida da nossa proposta.</span>

      <video class="video" controls>
        <source src="../../assets/videos/z1minuto.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: "Proposal",
  created() { },
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

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}

.title-container i {
  font-size: 1.4rem;
  color: var(--primary-color);
}

.proposal-content h2 {
  text-transform: uppercase;
}

.proposal-content .video {
  width: 100%;
  height: auto;
}
</style>
