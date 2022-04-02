<template>
  <div class="container gap slider-container">
    <div id="slider">
      <img
        class="selected"
        src="../../assets/zreader-slider/zbookHelp.png"
        alt="Tela inicial do Zreader"
      />
      <img
        src="../../assets/zreader-slider/zStore.png"
        alt="Loja  do Zreader"
      />
      <img
        src="../../assets/zreader-slider/zbookApp.png"
        alt="Descrição de jogos do Zreader"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  beforeMount() {},
  mounted() {
    this.getImagesLength();
  },

  data() {
    return {
      time: 2000,
      currentImageIndex: 0,
      images: null,
      max: 0,
    };
  },
  props: {},
  methods: {
    getImagesLength() {
      this.images = document.querySelectorAll("#slider img");
      this.max = this.images.length;
      this.start();
    },
    start() {
      setInterval(() => {
        this.nextImage();
      }, this.time);
    },
    nextImage() {
      this.images[this.currentImageIndex].classList.remove("selected");
      this.currentImageIndex = this.currentImageIndex + 1;
      if (this.currentImageIndex >= this.max) this.currentImageIndex = 0;

      this.images[this.currentImageIndex].classList.add("selected");
    },
  },
};
</script>

<style scoped>
.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#slider {
  height: 30rem;
  width: 55rem;
  border-radius: 1rem;
  position: relative;
}
#slider img {
  border-radius: 0.3rem;
  position: absolute;
  display: flex;
  width: 100%;
  object-fit: cover;
  transition: all 1s;
  height: 100%;
  opacity: 0;
}
#slider img.selected {
  opacity: 1;
}
@media (max-width: 810px) {
  #slider {
    height: 16rem;
    width: 25rem;
  }
}
@media (max-width: 480px) {
  #slider {
    height: 11rem;
    width: 19rem;
  }
}
</style>
