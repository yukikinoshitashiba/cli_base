<template>
  <header>
    <div class="container">
      <h2 class="logo"><router-link to="/"><img src="/images/logo.png" alt="Cafe Du Ando" width="800" height="205"></router-link></h2>
      <div class="gnav_wrapper">
        <div @click="toggleActive" :class="{active: isActive}" id="menu_btn" class="hamburger_menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav id="gnav" :class="{active: isActive}">
          <ul>
            <li @click="toggleActive"><router-link to="/">Home</router-link></li>
            <li @click="toggleActive"><router-link to="/link">Link</router-link></li>
            <li @click="toggleActive"><router-link to="/setting-menu">管理画面-Menu</router-link></li>
            <li @click="toggleActive"><router-link to="/gmaps">Google Maps</router-link></li>
            <li @click="toggleActive"><router-link to="/stop-watch">Stop Watch</router-link></li>
            <li @click="toggleActive"><router-link to="/clock">Clock</router-link></li>
            <li @click="toggleActive"><router-link to="/webapi">Web API</router-link></li>
            <li @click="toggleActive"><router-link to="/webapi-img">Random Image</router-link></li>
            <li @click="toggleActive"><router-link to="/vuex">Vuex</router-link></li>
            <li @click="toggleActive"><router-link to="/dynamic">Dynamic Components</router-link></li>
            <li @click="toggleActive"><router-link to="/cssanim1">CSS Transition</router-link></li>
            <li @click="toggleActive"><router-link to="/cssanim2">CSS Animation</router-link></li>
            <li @click="toggleActive"><router-link to="/transition">Transition</router-link></li>
          </ul>
        </nav>
      </div><!--gnav_wrapper-->
    </div><!--gnav_wrapper-->
  </header>
</template>

<script>
const h = document.querySelector('html');

export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isActive = false;
      if(this.isActive === true) {
        h.classList.add('active');
      } else {
        h.classList.remove('active');
      }
    })
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      if(this.isActive === true) {
        h.classList.add('active');
      } else {
        h.classList.remove('active');
      }
    }
  }
}
</script>
