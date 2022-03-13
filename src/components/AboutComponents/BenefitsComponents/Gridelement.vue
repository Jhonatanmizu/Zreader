<template>
  <div class="grid-el">
    <i :class="icon"></i>
    <p class="grid-el-text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "GridElement",
  created() {},
  data() {
    return {};
  },
  props: {
    icon: String,
    text: String,
  },
  methods: {},
};
</script>

<style scoped>
.grid-el {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;
  transition: all 5s ease-in-out;
}
.grid-el i:hover {
  color: #e72b44c2;
}
.grid-el i {
  font-size: 2.5rem;
  color: #e72b45;
}
.grid-el-text {
  text-align: center;
}
</style>
