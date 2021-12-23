<template>
  <header>
    <nav>
      <div class="branding">
        <Nuxt-link to="/">
          <img src="~/assets/img/logo_black.svg" alt="logo" />
        </Nuxt-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <div class="right-menu">
        <li>
          <NuxtLink class="link link--desktop menu-button" to="/depression">Depresja</NuxtLink>
        </li>
        <div class="dropdown-menu">
          <NuxtLink class="link link--desktop a" to="/depression">Co i jak?</NuxtLink>
          <NuxtLink class="link link--desktop a" to="/depression">Telefony Pomocy </NuxtLink>
          <NuxtLink class="link link--desktop a" to="/depression">Rozeznanie</NuxtLink>
        </div>
        </div>
        <div class="right-menu">
        <li>
          <NuxtLink class="link link--desktop menu-button" to="/blog">Blog</NuxtLink>
        </li>
        <div class="dropdown-menu">
          <NuxtLink class="link link--desktop a" to="/depression">Dołącz do nas!</NuxtLink>
        </div>
        </div>
        <!-- temporary disabled /zaloguj -->
        <!-- <li>
          <NuxtLink class="link link--desktop" to="/login">Zaloguj</NuxtLink>
        </li> -->
      </ul>
      <div class="icon">
        <i
          v-show="mobile"
          v-on-clickaway="awayMobileNav"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
          @click="toggleMobileNav"
        >
          <img src="~/assets/img/burger.svg" alt="logo" />
        </i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <Nuxt-link to="/"
              ><img src="~/assets/img/logo_black.svg" alt="logo"
            /></Nuxt-link>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/depression">Depresja</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/what">Co i jak</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/phones">Telefony Pomocy</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink class="link link--mobile" to="/login">Zaloguj</NuxtLink>
          </li> -->
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    awayMobileNav() {
      this.mobileNav = false
    },

    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 768) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    },
  },
}
</script>
<style lang="scss" scoped>
header {
  border-bottom: 3px solid #28dcc3;
  background-color: white;
  z-index: 99;
  width: 100%;
  height: 100px;
  position: fixed;
  transition: 0.5s ease all;
  color: black;
  @media (max-width: 768px) {
    height: auto;
  }

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    transition: 0.3s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 768px;
      height: 100%;
    }
    @media (max-width: 768px) {
      justify-content: space-between;
    }
    //menu hover
    .menu-button{
      background-color: white;
      cursor: pointer;
      padding-top: 0;
    }
    .right-menu{
      position: relative;
      display: inline-block;
    }
    .dropdown-menu{
      border-top: 3px solid #28dcc3;
      display: none;
      border: 1px solid black;
      position: absolute;
      width: 100%;
      color: white;
      background-color: #28dcc3;
      z-index: 1;
    }
    .dropdown-menu a:hover{
      border: 1px solid black;
      color: black;
      background-color: white;
      transition: all 1s ease ;
    }
    .right-menu:hover .dropdown-menu{
      display: block;
    }
    .right-menu:hover .menu-button{
      background-color: transparent;
    }
    .dropdown-menu a{
      height: 75px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    //koniec menu hover
    li {
      min-width: 150px;
      text-transform: uppercase;
      height: 97px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .link {
      cursor: pointer;
      &--desktop {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      &--mobile {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      //&:hover {
      //  @apply hover:opacity-80 transition-opacity;
      //}
    }
    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;

      i {
        cursor: pointer;
        transition: 0.8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #28dcc3;
      border-right: 4px solid white;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
      }
    }

    // animations
    .mobile-nav-enter-active {
      animation: slideIn 1s;
    }
    .mobile-nav-leave-active {
      animation: slideOut 1s;
    }

    @keyframes slideIn {
      from {
        left: -250px;
      }
      to {
        left: 0;
      }
    }
    @keyframes slideOut {
      from {
        left: 0;
      }
      to {
        left: -250px;
      }
    }
  }
}
</style>
