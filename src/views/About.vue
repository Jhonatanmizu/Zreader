<template>
  <div class="about">
    <Theory />
    <Benefits />
  </div>
</template>
<script>
import Theory from "../components/AboutComponents/Theory.vue";
import Benefits from "../components/AboutComponents/Benefits.vue";

export default {
  name: "About",
  components: {
    Theory,
    Benefits,
  },
};
</script>
