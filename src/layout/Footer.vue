<template>
  <footer class="footer">
    <div class="socials">
      <a href="https://www.facebook.com/zReader-103298028407156" target="_blank">
        <img src="../assets/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/zreader.app/" target="_blank">
        <img src="../assets/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://www.youtube.com/channel/UCKrm7dV1AYte8oTRuTH4T-g" target="_blank">
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
    <div class="developed">
      <span>Desenvolvido com <i class="fab fas fa-heart"></i> pela <a href="https://tecnosystemej.com.br">Tecno
          System</a> </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  created() { },
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
  min-height: 12.81rem;
  display: flex;
  gap: 1rem;
  padding: 1rem 5.5rem;
  align-items: center;
  justify-content: space-between;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem;
}

.socials img {
  width: 2.81rem;
  height: 2.5rem;
  transition: all 0.5s ease-in-out;
}

.support h3 {
  text-align: center;
  margin: 0.2rem;
}

.support-imgs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
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

.developed {
  font-weight: 300;

}

.developed i {
  color: var(--secondary-color);
  transform: translateY(0px);
  animation: float 5s ease-in-out infinite;
}

.developed a {
  cursor: pointer;
  color: var(--secondary-color);
  font-style: italic;

}

@keyframes float {
  0% {
    transform: translateY(0rem);
  }

  50% {
    transform: translateY(-3rem);
  }

  100% {
    transform: translateY(0rem);
  }
}

@media (max-width: 800px) {
  .footer {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: var(--gap);
  }

  .support img {
    width: 6rem;
    height: 5.5rem;
  }
}
</style>
