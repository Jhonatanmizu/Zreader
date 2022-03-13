<template>
  <section class="how-it-section">
    <div class="how-it-work container mb60">
      <h2 class="mb24">Como ele funciona?</h2>
      <img src="../../assets/reader.svg" class="reader mb24" alt="leitor" />
      <div class="hw-content">
        <div class="hw-text-content">
          <p class="hw-text gap">
            O aplicativo funciona como uma espécie de biblioteca de
            livros-jogos, onde as crianças podem ler narrativas enquanto montam
            um desenho animado e dublam as ações e personagens que constam no
            texto.
          </p>
          <p class="hw-text gap">
            Além disso, também está disponível uma loja, onde é possível
            realizar a aquisição de novos livros (os chamados zBooks), para que
            as crianças se divirtam ainda mais com uma maior variedade de
            histórias para jogar.
          </p>
        </div>
        <div class="hw-image">
          <img src="../../assets/leitura.svg" alt="Mulher lendo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWork",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.how-it-section {
  background-color: #f2f2f2;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.how-it-work {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.hw-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
}
.hw-text {
  font-size: 1.5rem;
  line-height: 36px;
}
.hw-image img {
  width: 40rem;
  height: 30rem;
}
.reader {
  height: 3.75rem;
  width: 3.75rem;
}
@media screen and (max-width: 810px) {
  .hw-image img {
    width: 20rem;
    height: 25rem;
  }
  .hw-text {
    text-align: justify;
  }
  .hw-content {
    flex-direction: column;
  }
}
</style>
