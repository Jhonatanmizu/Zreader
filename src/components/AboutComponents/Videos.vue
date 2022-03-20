<template>
  <div class="alt-bg">
    <div class="videos container gap">
      <div class="first-video">
        <Subtitle subtitle="O projeto" />
        <video class="video" controls>
          <source src="../../assets/videos/2cient.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="second-video">
        <Subtitle subtitle="A base científica" />
        <video class="video" controls>
          <source src="../../assets/videos/3oprojeto.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle from "../shared/Subtitle.vue";

export default {
  name: "Videos",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: { Subtitle },
};
</script>

<style scoped>
.videos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  min-height: 400px;
}
@media screen and (max-width: 1000px) {
  .videos {
    flex-direction: column;
  }
}
</style>
