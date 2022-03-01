<template>
  <div class="container benefits-content gap">
    <h3 class="benefits-title">
      Os principais benefícios para as crianças são melhorias em relação à:
    </h3>
    <ul class="benefits-list mb24">
      <li>Habilidades de leitura</li>
      <li>Capacidade de interpretação de textos</li>
      <li>Atenção durante a leitura;</li>
      <li>Entonação e pontuação (prosódia);</li>
      <li>Criatividade</li>
      <li>Capacidade de improvisação.</li>
    </ul>
    <p class="benefits-text">
      Para detalhes dos aspectos teóricos e experimentos que demonstram
      cientificamente alguns dos benefícios do zReader, veja as publicações
      acadêmicas apresentas abaixo.
    </p>
  </div>
</template>

<script>
export default {
  name: "Benefits",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.benefits-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column wrap;
  gap: 2rem;
}
.benefits-content .benefits-title {
  text-align: center;
}
.benefits-content .benefits-text {
  text-align: justify;
}

.benefits-list li {
  list-style-type: disc;
}
</style>
