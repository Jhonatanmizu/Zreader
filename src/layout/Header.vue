<template>
  <header id="header">
    <div :class="[{ 'ds-none': toggleMenuStatus }, 'logo']">
      <img src="../assets/logo.svg" class="zreader-logo" alt="Zreader logo" />
      <p>Sua plataforma de jogos educativos.</p>
    </div>
    <nav :class="[{ active: toggleMenuStatus }, 'nav']">
      <button class="btn-mobile" @click="toggleMenu" :aria-expanded="toggleMenuStatus" aria-controls="menu"
        aria-haspopup="true" :aria-label="ariaLabel">
        <span id="hamburguer"></span>
      </button>
      <ul class="menu" role="menu">
        <li>
          <router-link to="/" @click="isMenuOpen">Início</router-link>
        </li>
        <li>
          <router-link to="/About" @click="isMenuOpen">Sobre</router-link>
        </li>
        <li>
          <router-link to="/Games" @click="isMenuOpen">Jogos</router-link>
        </li>
        <li>
          <router-link to="/HowToUse" @click="isMenuOpen">Dicas de uso</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  created() { },
  data() {
    return {
      ariaLabel: "Abrir menu",
      toggleMenuStatus: false,
    };
  },
  props: {},
  methods: {
    toggleMenu() {
      this.toggleMenuStatus = !this.toggleMenuStatus;
      this.ariaLabel = this.toggleMenuStatus ? "Fechar menu" : "Abrir menu";
    },
    isMenuOpen() {
      if (this.toggleMenuStatus) return (this.toggleMenuStatus = false);
    },
  },
};
</script>

<style scoped>
#header {
  border: bottom 1px solid #ccc;
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  padding: 1rem 5.5rem;

  background: linear-gradient(270deg, #c10c25 50%, rgba(231, 43, 69, 0) 81.68%),
    #f0565c;
  mix-blend-mode: normal;
}

a {
  color: #fff;
  text-decoration: none;
  font-family: "Oswald", sans-serif;
}

.logo {
  min-height: 6.25rem;
  display: flex;

  position: relative;
  width: 25rem;
  transition: all 1s ease-in-out;
}

.zreader-logo {
  position: absolute;
  top: 1.25rem;
  height: 6rem;
  width: 6rem;
}

.logo p {
  position: absolute;
  top: 5.625rem;
  font-size: 1rem;
  left: 7.5rem;
}

.menu {
  display: flex;
  gap: 0.5rem;
}

.menu a {
  position: relative;
  text-transform: uppercase;
  display: block;
  padding: 0.5rem;
}

.menu a::after {
  content: "";
  position: absolute;
  bottom: 0.2rem;
  left: 50%;
  width: 0;
  height: 0.2rem;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.menu a:hover::after {
  left: 25%;
  width: 50%;
}

.btn-mobile {
  display: none;
}

.ds-none {
  display: none;
}

@media (max-width: 1000px) {
  #header {
    padding: 1rem;
  }

  .menu {
    display: block;
    height: 0px;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: var(--primary-color);
    border-radius: 0 5px;
    transition: 0.6s;
    z-index: 1000;
    visibility: hidden;
    overflow-y: hidden;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .nav.active .menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }

  .menu a {
    padding: 1rem 0;
    margin: 0 1rem;
  }

  .menu a::after {
    content: "";
    position: absolute;
    bottom: 0.2rem;
    left: 0%;
    width: 0;
    height: 0.2rem;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  .menu a:hover::after {
    left: 0%;
    width: 50%;
  }

  .btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
    color: #fff;
  }

  #hamburguer {
    display: block;
    border-top: 2px solid;
    width: 20px;
    color: #fff;
  }

  #hamburguer::after,
  #hamburguer::before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }

  .nav.active #hamburguer {
    border-top-color: transparent;
  }

  .nav.active #hamburguer::before {
    transform: rotate(135deg);
  }

  .nav.active #hamburguer::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>
