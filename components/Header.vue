<template>
  <header>
    <nav>
      <div class="branding">
        <Nuxt-link to="/">
        <img src="~/assets/img/logo_black.svg" alt="logo"/>
        </Nuxt-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <NuxtLink class="link" to="/depression">Depresja</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/blog">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/login">Zaloguj</NuxtLink>
        </li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }">
          <img src="~/assets/img/burger.svg" alt="logo"/>
        </i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <NuxtLink class="link" to="/depression">Depresja</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/login">Zaloguj</NuxtLink>
          </li>
      </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  mounted() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
<style lang="scss" scoped>
header{
  background-color: white;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: black;

  nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media(min-width: 768px){
      max-width: 768px;

    }
    ul,
    .link{
      font-weight: 500;
      color:black;
      list-style:none;
      text-decoration: none;
    }
    li{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link{
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

        &:hover {
          color: black;
          text-decoration: 3px underline #30E3CA;
        }
    }
      .branding{
        display: flex;
        align-items: center;

        img{
          width: 50px;
          transition: .5s ease all;
        }
      }

      .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
      }

      .icon{
        display: flex;
        align-items: center;
        position: absolute;
        top:0;
        right: 24px;
        height: 100%;

        i{
          cursor: pointer;
          font-size: 25px;
          transition: 0.8s ease all;
        }
      }
      .icon-active {
        transform: rotate(180deg);
      }
      .dropdown-nav {
        display:flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: #30E3CA;
        top: 0;
        left:0;
      
        li{
          margin-left: 0;
        }
      }

      
      /*.mobile-nav-enter-from{
        transform: translateX(-250px);
      }
      .mobile-nav-enter-active{
        transition: all 2s ease;
      } 
      .mobile-nav-enter-to {
        transform: translateX(0);
      }
      
      

      .mobile-nav-leave-from{
        transform: translateX(0);
      }
      .mobile-nav-leave-to {
        transform: translateX(-250px);
      }
      .mobile-nav-leave-active {
        transition: all 2s ease;
      } */

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
