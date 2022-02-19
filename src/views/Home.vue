<template>
  <Main />
  <!-- TODO Componentizar -->
  <section>
    <div class="how-it-work container">
      <h2 class="mb60">Como ele funciona?</h2>
      <img src="../assets/reader.svg" class="mb24" alt="leitor" />
      <p class="hw-text mb60">
        O aplicativo funciona como uma espécie de biblioteca de livros-jogos,
        onde as crianças podem ler narrativas enquanto montam um desenho animado
        e dublam as ações e personagens que constam no texto.
      </p>
    </div>
  </section>
</template>

<script>
import Main from "../components/HomeComponents/Main.vue";
export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>
<style scoped>
.mb24 {
  margin-bottom: 1.5rem;
}
.mb60 {
  margin-bottom: 3.75rem;
}
.how-it-work {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.hw-text {
  text-align: center;
  font-size: 1.5rem;
  line-height: 30px;
}
</style>
