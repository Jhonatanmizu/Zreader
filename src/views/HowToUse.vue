<template>
  <section class="hw-to-use">
    <Title title="Dicas de  uso" />
    <div class="hw-to-use__content container gap">
      <div class="tips">
        <!-- <div class="tips__grid mb24">
          <div
            class="tips__grid--element"
            :class="{ selected: selected }"
            v-for="tip in tips"
            :key="tip.id"
            :id="tip.id"
            :ref="tip.title"
            @click="ShowTip(tip.title)"
          >
            <h3 class="element__title">{{ tip.title }}</h3>
          </div>
        </div> -->
        <!-- <div class="tips__content"> -->
        <!-- <div class="accordion">
          <h3>Jogando com a turma</h3>
          <button @click="accordionAction" class="btn-action">
            <i
              :class="{
                'fa-solid fa-plus': isCollapsed,
                'fa-solid fa-minus': !isCollapsed,
              }"
            ></i>
          </button>
        </div>
        <div class="accordion-body" v-if="!isCollapsed">
          <div class="accordion__body--requirements">
            <h4 class="mb24">Infraestrutura</h4>
            <div class="tips__grid mb24">
              <div class="tips__grid--element">
                <span class="element__title">
                  Um dispositivo móvel (tablet ou celular).
                </span>
              </div>
              <div class="tips__grid--element">
                <span class="element__title">
                  Um projetor multimídia ou uma TV para projetar o conteúdo do
                  dispositivo móvel;
                </span>
              </div>
              <div class="tips__grid--element">
                <span class="element__title"> Uma caixa de som; </span>
              </div>
              <div class="tips__grid--element">
                <span class="element__title">
                  Um microfone wireless conectado à caixa de som.
                </span>
              </div>
            </div>
          </div>
        </div> -->
        <PlayWithTeam />
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import Title from "../components/shared/Title.vue";
import PlayWithTeam from "../components/HowToUseComponents/PlayWithTeam.vue";

export default {
  name: "HowToUse",
  created() {},
  data() {
    return {
      selected: false,
      isCollapsed: true,
      tips: [
        {
          id: 1,
          title: "Jogando com a turma",
        },
        {
          id: 2,
          title: "Jogando em dulpla/trio",
        },
        {
          id: 3,
          title: "Jogando com a(o) filha/filho",
        },
        {
          id: 4,
          title: "Aulas virtuais",
        },
      ],
    };
  },
  props: {},
  methods: {
    ShowTip(title) {
      console.log(title);
      console.log("O elemento", this.$refs[`${title}`]);
      console.log(this.$refs[`${title}`][0].style);
      this.$refs[`${title}`][0].style.background != "#e72b45cc"
        ? (this.$refs[`${title}`][0].style.background = "#e72b45cc")
        : (this.$refs[`${title}`][0].style.background = "crimson");
    },
    accordionAction() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
  components: { Title, PlayWithTeam },
};
</script>

<style scoped>
.hw-to-use {
  min-height: 100vh;
  width: 100%;
}
.hw-to-use .hw-to-use__content {
  min-height: 100vh;
  width: 100%;
}
.tips {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
}
.tips__grid {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 1rem;
}
.tips__grid--element {
  cursor: pointer;
  min-width: 14rem;
  min-height: 9.7rem;
  background-color: var(--primary-color);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  justify-content: center;
  text-align: center;
  padding: 0.2rem;
}
.tips__grid--element:hover {
  background-color: #e72b45cc;
}
.tips__grid .selected {
  background-color: #e72b45cc;
}
.tips .tips__content {
  width: 100%;
  height: 100%;
}
.accordion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  height: 4.5rem;
  position: relative;
  width: 100%;
  border-radius: 0.625rem;
  background-color: var(--light-bg);
  border-bottom: 2rem var(--gradient-color);
}
.accordion::after {
  content: "";
  position: absolute;
  height: 1rem;
  width: 100%;
  left: 0;
  right: 0;
  top: -10;
  bottom: 0;
  border-radius: 0 0 0.625rem 0.625rem;
  background: var(--gradient-color);
}
.btn-action {
  border: none;
  background: none;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
}
.btn-action i {
  font-size: 1.5rem;
  color: var(--primary-color);
}
.accordion-body {
  background: var(--light-bg);
  border-radius: 0.625rem;
  padding: 1rem;
  position: relative;
  width: 100%;
}
.accordion-body::after {
  content: "";
  position: absolute;
  height: 1rem;
  width: 100%;
  left: 0;
  right: 0;
  top: -10;
  bottom: 0;
  border-radius: 0 0 0.625rem 0.625rem;
  background: var(--gradient-color);
}
@media (max-width: 800px) {
  .tips__grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
  .tips__grid .tips__grid--element {
    width: 10rem;
    height: 7rem;
  }
}
</style>
