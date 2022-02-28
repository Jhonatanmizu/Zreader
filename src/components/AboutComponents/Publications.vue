<template>
  <section>
    <div class="container gap publicatons-container">
      <h3 class="mb24">Publicações científicas</h3>
      <p class="mb24">
        Veja aqui algumas produções científicas publicadas sobre o zReader:
      </p>
      <ul class="list">
        <li class="list-element">
          <a
            class="list-link"
            href="http://br-ie.org/pub/index.php/sbie/article/viewFile/8013/5707"
          >
            GUERRA, FABRÍCIO ; SANTOS, JOSÉ AMANCIO ; SEREY, DALTON ;
            FIGUEIREDO, JORGE CÉSAR ABRANTES DE . z-Reader: a Mobile Game Suite
            for Improving Children's Reading Skills and Behavior. In: XXIX
            Simpósio Brasileiro de Informática na Educação (Brazilian Symposium
            on Computers in Education), 2018, Fortaleza, 2018. p. 565.
          </a>
        </li>
        <li class="list-element">
          <a
            href="http://dspace.sti.ufcg.edu.br:8080/xmlui/bitstream/handle/riufcg/10736/FABR%C3%8DCIO%20VALE%20DE%20AZEVEDO%20GUERRA%20-%20TESE%20(PPGCC)%202018.pdf?sequence=1&isAllowed=y"
            class="list-link"
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
          >
            GUERRA, Fabrício Vale de Azevedo; GORGONIO, F. L. ; GUERRERO, D. D.
            S. ; Figueiredo, J. C. A. . Syllabic Keyboard: A Literacy Game for
            Motivating First Grade Children to Read. In: Simpósio Brasileiro de
            Informática na Educação, 2019, Brasília. Proceedings of the SBIE
            2019, 2019.
          </a>
        </li>
        <li class="list-element">
          <a
            href="https://repositorio.ufrn.br/handle/123456789/33042"
            class="list-link"
            >SOUSA, Tamila Kécia Nunes. Efeitos da prática pedagógica aliada à
            tecnologia sobre o processo de leitura em crianças ao fim do ciclo
            de alfabetização. Caicó, RN: 2021. 56f. Monografia (Licenciatura em
            Pedagogia) - Universidade Federal do Rio Grande do Norte. Centro de
            Ensino Superior do Seridó.</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Publications",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
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
</style>
