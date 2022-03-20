<template>
  <div class="subtitle-container">
    <div class="square"></div>
    <h3 class="subtitle">
      {{ subtitle }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "Subtitle",
  created() {},
  data() {
    return {};
  },
  props: {
    subtitle: String,
  },
  methods: {},
};
</script>

<style scoped>
.subtitle-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0 1rem;
  margin-bottom: 1.32rem;
}
.subtitle-container .square {
  height: 1rem;
  width: 1rem;
  background: var(--gradient-color);
  mix-blend-mode: normal;
}
.subtitle-container .subtitle {
  font-size: 1.5rem;
}
</style>
