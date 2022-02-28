<template>
  <div class="about">
    <Theory />
    <Benefits />
    <Publications />
  </div>
</template>
<script>
import Theory from "../components/AboutComponents/Theory.vue";
import Benefits from "../components/AboutComponents/Benefits.vue";
import Publications from "../components/AboutComponents/Publications.vue";

export default {
  name: "About",
  components: {
    Theory,
    Benefits,
    Publications,
  },
};
</script>
