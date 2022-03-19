<template>
  <div id="top" class="btn-to-top" ref="top" @click="toTop">
    <i class="fa-solid fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  created() {
    this.showOnScroll();
  },
  data() {
    return {
      btn: document.querySelector("#top"),
    };
  },
  props: {},
  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.$refs["top"].style.display = "flex";
        console.log(this.$ref);
      } else {
        this.$refs["top"].style.display = "none";
      }
    },
    showOnScroll() {
      window.onscroll = () => {
        this.scrollFunction();
      };
    },
    toTop() {
      console.log(this.$refs["top"]);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.btn-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;

  background: var(--gradient-color);
  color: white;
  height: 2rem;
  width: 2rem;

  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 0.5rem;
  transition: all 0.5s ease-out;
}
.btn-to-top:hover {
  background: crimson;
}
</style>
