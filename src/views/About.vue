<template>
  <div class="about">
    <Theory />
    <Videos />
    <Benefits />
    <Publications />
  </div>
</template>
<script>
import Theory from "../components/AboutComponents/Theory.vue";
import Benefits from "../components/AboutComponents/Benefits.vue";
import Publications from "../components/AboutComponents/Publications.vue";

import Videos from "../components/AboutComponents/Videos.vue";

export default {
  name: "About",
  components: {
    Theory,
    Benefits,
    Publications,
    Videos,
  },
};
</script>
