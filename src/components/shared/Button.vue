<template>
  <a :href="link" target="_blank">
    <button class="btn mb24">{{ text }}</button></a
  >
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
  data() {
    return {
      link: "https://play.google.com/store/apps/details?id=br.com.zreader&hl=pt&gl=US",
    };
  },
};
</script>

<style scoped>
.btn {
  border: none;
  color: var(--secondary-color);
  background: var(--primary-color);
  font-size: 1.5rem;
  border-radius: 5px;
  width: 13.25rem;
  height: 4.875rem;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  background: #e72b45cc;
}
.btn:active {
  background: #ac2234;
}
</style>
