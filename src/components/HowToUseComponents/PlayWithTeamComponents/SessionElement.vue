<template>
  <div class="session mb24">
    <h4>{{ title }}</h4>
    <div>
      <ul class="list">
        <li class="list__element" v-for="li in listElements" :key="li.id">
          {{ li.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionElement",
  created() {},
  data() {
    return {
      listElements: [
        {
          id: 1,
          text: "algo",
        },
        {
          id: 2,
          text: "algo2",
        },
      ],
    };
  },
  props: {
    title: null,
  },
  methods: {},
};
</script>

<style scoped>
.list .list__element {
  padding:0.2rem;
}
</style>
