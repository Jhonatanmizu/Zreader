<template>
  <section class="container gap">
    <div class="proposal-content">
      <h2>Nossa proposta</h2>
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
</style>
