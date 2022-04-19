<template>
  <div class="tips__grid--element" v-for="grid in requirements" :key="grid.id">
    <span class="element__title">
      {{ grid.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TipsGridElement",
  created() {},
  data() {
    return {};
  },
  props: {
    requirements: null,
  },
  methods: {},
};
</script>

<style scoped>
.tips__grid--element {
  width: 14rem;
  height: 9.7rem;
  background-color: var(--primary-color);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  justify-content: center;
  text-align: center;
  padding: 0.2rem;
}
.tips__grid--element:hover {
  background-color: #e72b45cc;
}
@media (max-width: 800px) {
  .tips__grid--element {
    max-width: 10rem;
    max-height: 10rem;
  }
}
</style>
