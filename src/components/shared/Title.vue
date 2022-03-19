<template>
  <div class="title-container">
    <h1 class="title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  created() {},
  data() {
    return {};
  },
  props: {
    title: String,
  },
  methods: {},
};
</script>

<style scoped>
.title-container {
  min-height: 12.375rem;
  width: 100%;
  border-radius: 0 0 50px 50px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  margin-bottom: 5.06rem;
  justify-content: center;
}
.title {
  position: relative;
  text-transform: uppercase;
  margin-bottom: 2rem;
  border-bottom: 2rem var(--gradient-color);
}
.title::after {
  content: "";
  position: absolute;
  height: 0.3rem;
  width: 10rem;
  min-width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 3.5rem;
  mix-blend-mode: normal;
  background: var(--gradient-color);
}
</style>
