<template>
  <div class="loader"></div>
</template>
<script>
export default {
  name: "Loader",
  data() {
    return {
      loader: document.querySelector(".loader"),
    };
  },
  methods: {
    loading() {
      this.loader.hidden = false;
    },
    complete() {
      this.loader.hidden = true;
    },
    cycle() {
      this.loading();
      setTimeout(() => {
        this.complete();
      }, 1000);
    },
  },
  mounted() {
    this.cycle();
  },
};
</script>
<style>
.loader {
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #c80b21;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
