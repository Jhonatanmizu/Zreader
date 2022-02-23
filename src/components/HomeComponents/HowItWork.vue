<template>
  <section>
    <div class="how-it-work container mb60">
      <h2 class="mb24">Como ele funciona?</h2>
      <div class="hw-content">
        <img src="../../assets/reader.svg" class="mb24" alt="leitor" />
        <p class="hw-text gap">
          O aplicativo funciona como uma espécie de biblioteca de livros-jogos, onde as
          crianças podem ler narrativas enquanto montam um desenho animado e dublam as
          ações e personagens que constam no texto.
        </p>
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
  flex-direction: column;
}
.hw-text {
  text-align: center;
  font-size: 1.5rem;
  line-height: 36px;
}
.hw-image img {
  width: 40rem;
  height: 30rem;
}

@media (max-width: 600px) {
  .hw-image img {
    width: 20rem;
    height: 25rem;
  }
}
</style>
