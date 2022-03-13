<template>
  <section>
    <main class="main container gap">
      <div class="main-content">
        <h1 class="main-title"><span class="main-title-span">z</span>reader</h1>
        <p class="main-text">
          O zReader é uma suite composta por diversos jogos, todos com o
          objetivo de desenvolver a capacidade de leitura das crianças, bem como
          seu gosto pela atividade de leitura.
        </p>
        <Button text="Baixe o app!" />
      </div>
      <div class="main-image">
        <img
          src="../../assets/zreader-images/appGooglePlay.png"
          alt="App zreader"
        />
      </div>
    </main>
  </section>
</template>

<script>
import Button from "../shared/Button.vue";
export default {
  name: "Main",
  components: {
    Button,
  },
};
</script>

<style scoped>
.main {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
}
.mb24 {
  margin-bottom: 1.5rem;
}
.mb60 {
  margin-bottom: 3.75rem;
}
.main-title {
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.main-title-span {
  text-transform: lowercase;
}
.main-text {
  margin-bottom: 2.1875rem;
  line-height: 36px;
  text-align: justify;
  font-size: 1.5rem;
}
.main-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-image img {
  width: 100%;
  height: 80%;
  border-radius: 0.32rem;
}

@media (max-width: 800px) {
  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
