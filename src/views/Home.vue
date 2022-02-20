<template>
  <Main />
  <HowItWork />
</template>

<script>
import HowItWork from "../components/HomeComponents/HowItWork.vue";
import Main from "../components/HomeComponents/Main.vue";
export default {
  name: "Home",
  components: {
    Main,
    HowItWork,
  },
};
</script>
<style>
.mb24 {
  margin-bottom: 1.5rem;
}
.mb60 {
  margin-bottom: 3.75rem;
}
</style>
