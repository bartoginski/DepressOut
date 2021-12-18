<template>
  <header>
    <nav>
      <div class="branding">
        <Nuxt-link to="/">
          <img src="~/assets/img/logo_black.svg" alt="logo" />
        </Nuxt-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <NuxtLink class="link link--desktop" to="/depression">Depresja</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link link--desktop" to="/blog">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link link--desktop" to="/login">Zaloguj</NuxtLink>
        </li>
      </ul>
      <div class="icon">
        <i
          v-show="mobile"
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
            <NuxtLink class="link link--mobile" to="/depression">Depresja</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link link--mobile" to="/login">Zaloguj</NuxtLink>
          </li>
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
  background-color: white;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: black;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 768px;
    }
    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      font-weight: 500;
      color: black;
      list-style: none;
      text-decoration: none;

      &--desktop {
        font-size: 20px;
      }

      &--mobile {
        color: white;
      }

      &:hover {
        color: '#28dcc3';
        text-decoration: 3px underline #28dcc3;
      }
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
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 25px;
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
