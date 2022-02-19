<template>
  <main class="main container gap">
    <div class="main-content">
      <h1 class="main-title">Zreader</h1>
      <p class="main-text">
        O zReader é uma suite composta por diversos jogos, todos com o objetivo
        de desenvolver a capacidade de leitura das crianças, bem como seu gosto
        pela atividade de leitura.
      </p>
      <Button text="Baixe o app!" />
    </div>
    <div class="main-image">
      <img src="" alt="Rita gasguita e Chica Galêga" />
    </div>
  </main>
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

<style>
.main {
  display: grid;
  align-items: flex;
  grid-template-columns: 1fr 1fr;
}
.mb24 {
  margin-bottom: 1.5rem;
}
.mb60 {
  margin-bottom: 3.75rem;
}
.main-title {
  margin-bottom: 1.5rem;
}
.main-text {
  margin-bottom: 2.1875rem;
  line-height: 2;
  text-align: justify;
  font-size: 1.5rem;
}
.main-image {
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
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
