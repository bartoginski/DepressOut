<template>
  <form class="border-black flex flex-col justify-centerc" method="post">
    <label class="flex flex-col"
      >Email
      <input type="email" name="email" placeholder="email" />
    </label>
    <label class="flex flex-col"
      >Hasło
      <input type="password" name="password" placeholder="password" />
    </label>
    <input type="submit" value="Zaloguj" @click="login" />
    <p>
      Nie masz konta?
      <Nuxt-link to="/register" class="text-primary">Zarejestruj się</Nuxt-link>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
      login(e) {
          e.preventDefault()
      }
  },
}
</script>

<style lang="scss" scoped>
input {
  @apply border-gray-500 border py-3 px-5 rounded-xl relative mb-4;
}
</style>
