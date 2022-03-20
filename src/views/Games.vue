<template>
  <section class="games">
    <Title title="Jogos " />
    <div class="container gap">
      <Card
        v-for="game in games"
        :key="game.id"
        :title="game.title"
        :text="game.text"
        :type="game.type"
        :video="game.video"
      />
    </div>
  </section>
</template>

<script>
import Title from "../components/shared/Title.vue";
import Card from "../components/GamesComponents/Card.vue";

export default {
  name: "Games",
  created() {},
  data() {
    return {
      games: [
        {
          id: 1,
          title: "Tela principal",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
          type: "fasaaf",
          video: "ashdffhdsasad",
        },
        {
          id: 2,
          title: "Tvid",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
          type: "fasaaf",
          video: "ashdffhdsasad",
        },
        {
          id: 3,
          title: "CPuz",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
          type: "fasaaf",
          video: "ashdffhdsasad",
        },
        {
          id: 4,
          title: "Estúdio de gravação",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
          type: "fasaaf",
          video: "ashdffhdsasad",
        },
      ],
    };
  },
  props: {},
  methods: {},
  components: { Title, Card },
};
</script>

<style scoped>
.games {
  min-height: 100vh;
}
</style>
