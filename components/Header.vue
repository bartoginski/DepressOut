<template>
  <header>
    <nav>
      <div class="ml-5 md:ml-20 branding">
        <Nuxt-link to="/">
          <img src="~/assets/img/logo.svg" alt="logo" />
        </Nuxt-link>
      </div>
      <ul v-show="!mobile" class="md:mr-20 navigation">
        <div class="right-menu">
          <li>
            <NuxtLink class="link link--desktop menu-button" to="/depression"
              >Depresja</NuxtLink
            >
          </li>
          <div class="dropdown-menu">
            <NuxtLink class="link link--desktop a" to="/what"
              >Co i jak?</NuxtLink
            >
            <NuxtLink class="link link--desktop a" to="/phones"
              >Telefony Pomocy
            </NuxtLink>
            <!-- <NuxtLink class="link link--desktop a" to="/depression">Rozeznanie</NuxtLink> -->
          </div>
        </div>
        <div class="right-menu">
          <li>
            <NuxtLink class="link link--desktop menu-button" to="/blog"
              >Blog</NuxtLink
            >
          </li>
          <!-- <div class="dropdown-menu">
          <NuxtLink class="link link--desktop a" to="/depression">Dołącz do nas!</NuxtLink>
        </div> -->
        </div>
        <div class="right-menu">
          <li>
            <NuxtLink class="link link--desktop menu-button" to="/quiz"
              >Quiz</NuxtLink
            >
          </li>
        </div>
        <!-- temporary disabled /zaloguj -->
        <!-- <li>
          <NuxtLink class="link link--desktop" to="/login">Zaloguj</NuxtLink>
        </li> -->
      </ul>
      <div class="icon mr-5">
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
              ><img
                src="~/assets/img/logo_white.svg"
                alt="logo"
                class="logo__mobile"
            /></Nuxt-link>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/depression"
              >Depresja</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/quiz">Quiz</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/what">Co i jak</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/phones"
              >Telefony Pomocy</NuxtLink
            >
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    right: 0px;
    display: flex;
    flex-direction: row;
    transition: 0.3s ease all;
    width: 100%;
    @media (min-width: 768px) {
      height: 100%;
    }
    @media (max-width: 768px) {
      justify-content: space-between;
    }
    //menu hover
    .menu-button {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding-top: 0;
    }
    .menu-button:hover {
      background-color: #28dcc3;
      @apply hover:opacity-80 transition-opacity;
    }

    .right-menu {
      position: relative;
      display: inline-block;
    }
    .right-menu:hover {
      background-color: #28dcc3;
      color: white;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      width: 100%;
      color: white;
      background-color: #28dcc3;
      z-index: 1;
      animation: growDown 300ms ease-in-out forwards;
      transform-origin: top center;
    }
    .dropdown-menu a:hover {
      @apply hover:opacity-80 transition-opacity;
    }
    .right-menu:hover .dropdown-menu {
      display: block;
    }
    @keyframes growDown {
      0% {
        transform: scaleY(0);
      }
      80% {
        transform: scaleY(1.1);
      }
      100% {
        transform: scaleY(1);
      }
    }
    .dropdown-menu a {
      border-top: 3px solid white;
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
        width: 120px;
        transition: 0.5s ease all;
      }
    }

    .logo {
      &__mobile {
        width: 120px;
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
      padding-top: 28px;
      padding-bottom: 28px;

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
      color: white;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
      }
      li :hover {
        @apply hover:opacity-80 transition-opacity;
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
