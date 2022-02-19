<template>
  <footer class="footer">
    <div class="socials">
      <img src="../assets/facebook.svg" alt="Facebook" />
      <img src="../assets/instagram.svg" alt="Instagram" />
      <img src="../assets/youtube.svg" alt="Youtube" />
    </div>
    <div class="support">
      <img src="" alt="Governo do estado da Bahia" />
      <img src="" alt="Facebook" />
      <img src="" alt="Facebook" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.footer {
  width: 100%;
  color: var(--secondary-color);
  background: var(--primary-color);
  height: 12.81rem;
  display: flex;
  padding: 1rem 5.5rem;
  align-items: flex-start;
  justify-content: space-between;
}
.socials {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.socials img {
  width: 2.81rem;
  height: 2.5rem;
}
@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    padding: var(--gap);
  }
}
</style>
