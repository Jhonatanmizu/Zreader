<template>
  <section class="theory-section">
    <div class="container gap theory-content">
      <h2 class="theory-title mb24">Um pouco mais de teoria</h2>
      <p class="theory-text mb24">
        O zReader é resultado de um amplo estudo sobre o uso de tecnologia
        digital para apoiar a alfabetização de crianças. Desenvolvido após a
        observação dos problemas causados pelo uso tecnologias digitais durante
        ciclo de alfabetização,
        <strong>
          baseia-se nos fundamentos da teoria construcionista de Seymour Papert
          que, por sua vez é baseada no construcionismo de Jean Piaget.</strong
        >
        De forma resumida, o construtivismo enfatiza a interação do sujeito com
        o objeto de estudo como um meio para alcançar a aprendizagem. O
        construcionismo direciona essa interação para a criação de artefatos,
        que no caso do zReader são as animações.
      </p>
      <p class="theory-text">
        No zReader, essas interações ocorrem durante a leitura e durante a
        criação da animação final, no zStudio. Durante a leitura dos zBooks, as
        interações ocorrem pela leitura das páginas e pela a escolha de
        representações visuais ou palavras adequadas para um segmento de texto.
        No zStudio, as interações ocorrem pela leitura dos textos nos balões das
        animações, pela criação improvisada de falas dos personagens e/ou
        narração da história , pela entonação na leitura ou criação das falas
        dos personagens, e pela montagem das animações na sequência correta.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Theory",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.theory-section {
  margin-bottom: 2.5rem;
}
.theory-content .theory-title {
  text-align: center;
}
.theory-content .theory-text {
  text-align: justify;
  line-height: 1.875rem;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.49);
  box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.49);
}
</style>
