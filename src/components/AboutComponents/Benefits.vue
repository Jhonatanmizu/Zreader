<template>
  <div class="container benefits-content gap">
    <h3 class="benefits-title mb24">
      Os principais benefícios para as crianças são melhorias em relação à:
    </h3>
    <div class="grid mb60">
      <Gridelement icon="fa-solid fa-baby" text="Capacidade de improvisação" />
      <Gridelement icon="fa-solid fa-book-open" text="Habilidades de leitura" />
      <Gridelement
        icon="fa-solid fa-brain"
        text="Capacidade de interpretação de textos"
      />
      <Gridelement icon="fa-solid fa-pen" text="Criatividade" />
      <Gridelement
        icon="fa-solid fa-quote-right"
        text="Entonação e pontuação"
      />
      <Gridelement
        icon="fa-solid fa-glasses"
        text="Atenção durante a leitura"
      />
    </div>
    <p class="benefits-text">
      Para detalhes dos aspectos teóricos e experimentos que demonstram
      cientificamente alguns dos benefícios do zReader, veja as publicações
      acadêmicas apresentas abaixo.
    </p>
  </div>
</template>

<script>
import Gridelement from "./BenefitsComponents/Gridelement.vue";
export default {
  name: "Benefits",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: { Gridelement },
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
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
}
@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
}
</style>
