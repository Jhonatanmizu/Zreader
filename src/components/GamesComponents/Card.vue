<template>
  <div>
    <div class="card mb24">
      <div class="card__header">
        <h3 class="card__title">
          {{ title }}
        </h3>
        <button class="btn-action" @click="toggleCardBody">
          <i
            :class="{
              'fa-solid fa-plus': isCollapsed,
              'fa-solid fa-minus': !isCollapsed,
            }"
          ></i>
        </button>
      </div>
      <Transition name="fade">
        <div class="card__body" v-show="!isCollapsed">
          <video class="video" controls>
            <source :src="video" type="" />
          </video>
          <div class="card__text">
            <p>
              {{ text }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  created() {},
  data() {
    return {
      isCollapsed: true,
    };
  },
  props: {
    title: String,
    video: null,
    text: String,
    type: String,
  },
  methods: {
    toggleCardBody() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.card {
  padding: 1rem;
  background: var(--light-bg);
  border-radius: 0.625rem;
  gap: 0.5rem;
  position: relative;
}
.card::after {
  content: "";
  width: 100%;
  height: 0.5rem;
  background: var(--gradient-color);
  left: 0;
  right: 0;
  top: -10;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 0.625rem 0.625rem;
}
.card .card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card .card__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  gap: 0.5rem;
  margin-top: 0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 1000px) {
  .card .card__body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
  }
}
</style>
