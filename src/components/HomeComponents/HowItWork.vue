<template>
  <section>
    <div class="how-it-work container">
      <h2 class="mb60">Como ele funciona?</h2>
      <img src="../../assets/reader.svg" class="mb24" alt="leitor" />
      <p class="hw-text mb60 gap">
        O aplicativo funciona como uma espécie de biblioteca de livros-jogos, onde as
        crianças podem ler narrativas enquanto montam um desenho animado e dublam as ações
        e personagens que constam no texto.
      </p>
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
.hw-text {
  text-align: justify;
  font-size: 1.5rem;
  line-height: 30px;
}
</style>
