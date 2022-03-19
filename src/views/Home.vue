<template>
  <Main />
  <HowItWork />
  <Slider />
  <Proposal />
  <BackToTop />
</template>

<script>
import HowItWork from "../components/HomeComponents/HowItWork.vue";
import Main from "../components/HomeComponents/Main.vue";
import Proposal from "../components/HomeComponents/Proposal.vue";
import Slider from "../components/HomeComponents/Slider.vue";
import BackToTop from "../components/shared/BackToTop.vue";
export default {
  name: "Home",
  components: {
    Main,
    HowItWork,
    Proposal,
    Slider,
    BackToTop,
  },
};
</script>
<style></style>
