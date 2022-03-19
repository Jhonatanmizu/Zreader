<template>
  <div class="about">
    <Theory />
    <Benefits />
    <Publications />
    <BackToTop />
  </div>
</template>
<script>
import Theory from "../components/AboutComponents/Theory.vue";
import Benefits from "../components/AboutComponents/Benefits.vue";
import Publications from "../components/AboutComponents/Publications.vue";
import BackToTop from "../components/shared/BackToTop.vue";

export default {
  name: "About",
  components: {
    Theory,
    Benefits,
    Publications,
    BackToTop,
  },
};
</script>
