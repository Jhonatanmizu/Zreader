<template>
  <section>
    <main class="main container gap">
      <div class="main-content">
        <div class="top-margin"></div>
        <p class="main-text">
          Somos uma suite composta por diversos jogos, todos com o objetivo de
          desenvolver a capacidade de leitura das crianças, bem como seu gosto
          pela atividade de leitura.
        </p>
        <Button text="Baixe o app!" />
      </div>
      <div class="main-image">
        <img src="../../assets/zreader-images/mockup.png" alt="App zreader" />
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
  gap: 2rem;
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
  padding: 1rem;
}
.main-image img {
  width: 100%;
  height: 80%;
}
.top-margin {
  margin-top: 6.25rem;
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
