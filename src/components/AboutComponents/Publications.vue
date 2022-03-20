<template>
  <div class="container gap">
    <div class="accordion mb24">
      <h3>Publicações Científicas</h3>
      <button @click="accordionAction" class="btn-action">
        <i
          :class="{
            'fa-solid fa-plus': isCollapsed,
            'fa-solid fa-minus': !isCollapsed,
          }"
        ></i>
      </button>
    </div>
    <Transition>
      <div class="accordion-body" v-if="!isCollapsed">
        <ul class="list">
          <li class="list-element">
            <a
              class="list-link"
              href="http://br-ie.org/pub/index.php/sbie/article/viewFile/8013/5707"
              target="_blank"
            >
              GUERRA, FABRÍCIO ; SANTOS, JOSÉ AMANCIO ; SEREY, DALTON ;
              FIGUEIREDO, JORGE CÉSAR ABRANTES DE . z-Reader: a Mobile Game
              Suite for Improving Children's Reading Skills and Behavior. In:
              XXIX Simpósio Brasileiro de Informática na Educação (Brazilian
              Symposium on Computers in Education), 2018, Fortaleza, 2018. p.
              565.
            </a>
          </li>
          <li class="list-element">
            <a
              href="http://dspace.sti.ufcg.edu.br:8080/xmlui/bitstream/handle/riufcg/10736/FABR%C3%8DCIO%20VALE%20DE%20AZEVEDO%20GUERRA%20-%20TESE%20(PPGCC)%202018.pdf?sequence=1&isAllowed=y"
              class="list-link"
              target="_blank"
            >
              GUERRA, FABRÍCIO. zReader: a Mobile Game Suite for Improving
              Children’s Reading Skills and Behavior. Tese de doutorado
              apresentada no Curso de pós-graduação em Ciência da Computação da
              Universidade Federal de Campina Grande (UFCG), em 2018.
            </a>
          </li>
          <li class="list-element">
            <a
              href="https://br-ie.org/pub/index.php/sbie/article/viewFile/8835/6393"
              class="list-link"
              target="_blank"
            >
              GUERRA, Fabrício Vale de Azevedo; GORGONIO, F. L. ; GUERRERO, D.
              D. S. ; Figueiredo, J. C. A. . Syllabic Keyboard: A Literacy Game
              for Motivating First Grade Children to Read. In: Simpósio
              Brasileiro de Informática na Educação, 2019, Brasília. Proceedings
              of the SBIE 2019, 2019.
            </a>
          </li>
          <li class="list-element">
            <a
              href="https://repositorio.ufrn.br/handle/123456789/33042"
              target="_blank"
              class="list-link"
              >SOUSA, Tamila Kécia Nunes. Efeitos da prática pedagógica aliada à
              tecnologia sobre o processo de leitura em crianças ao fim do ciclo
              de alfabetização. Caicó, RN: 2021. 56f. Monografia (Licenciatura
              em Pedagogia) - Universidade Federal do Rio Grande do Norte.
              Centro de Ensino Superior do Seridó.</a
            >
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  created() {},
  data() {
    return {
      plus: "fa-solid fa-plus",
      minus: "fa-solid fa-minus",
      isCollapsed: true,
    };
  },
  props: {},
  methods: {
    accordionAction() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.accordion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  height: 4.5rem;
  position: relative;
  border-radius: 0.625rem;
  background-color: var(--light-bg);
  border-bottom: 2rem var(--gradient-color);
}
.accordion::after {
  content: "";
  position: absolute;
  height: 0.5rem;
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
  transition: all 1s ease-in;
}
.accordion-body::after {
  content: "";
  position: absolute;
  height: 0.5rem;
  width: 100%;
  left: 0;
  right: 0;
  top: -10;
  bottom: 0;
  border-radius: 0 0 0.625rem 0.625rem;
  background: var(--gradient-color);
}
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.list-element {
  text-decoration: underline;
}
.list-element .list-link {
  text-decoration: none;
  color: #000;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
