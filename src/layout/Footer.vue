<template>
  <footer class="footer">
    <div class="socials">
      <a
        href="https://www.facebook.com/zReader-103298028407156"
        target="_blank"
      >
        <img src="../assets/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/zreader.app/" target="_blank">
        <img src="../assets/instagram.svg" alt="Instagram" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCKrm7dV1AYte8oTRuTH4T-g"
        target="_blank"
      >
        <img src="../assets/youtube.svg" alt="Youtube" />
      </a>
    </div>
    <div class="support">
      <div class="support-imgs">
        <img src="../assets/finep.jpg" alt="Finep" />
        <img src="../assets/govba.svg" alt="Governo do estado da Bahia" />
        <img src="../assets/fapesb.svg" alt="Fapesb" />
      </div>
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
  background: linear-gradient(270deg, #c10c25 50%, rgba(231, 43, 69, 0) 81.68%),
    #f0565c;
  mix-blend-mode: normal;
  max-height: 12.81rem;
  display: flex;
  padding: 1rem 5.5rem;
  align-items: center;
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
  transition: all 0.1s ease-in-out;
}

.socials img:hover {
  width: 3rem;
  height: 2.7rem;
}
.support h3 {
  text-align: center;
  margin: 0.2rem;
}
.support-imgs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  /* background-color: #fff; */
  padding: 0.5rem;
  border-radius: 0.2rem;
}
.support img {
  width: 10rem;
  border-radius: 5px;
  height: 7rem;
  background: #fff;
  padding: 0.2rem;
}
@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    align-items: center;
    padding: var(--gap);
  }
  .support img {
    width: 6rem;
    height: 5.5rem;
  }
}
</style>
