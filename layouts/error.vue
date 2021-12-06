<template>
  <div v-if="error.statusCode === 404" class="text-black py-28 flex flex-col justify-items-center items-center gap-10">
      <img src="~/assets/img/error_404.svg" alt="">
    <NuxtLink class="text-4xl text-primary" to="/">Back to homepage</NuxtLink>
  </div>
</template>

<script>
  export default {
    layout: 'error',
    // eslint-disable-next-line vue/require-prop-types
    props: ['error'] // you can set a custom layout for the error page
  }
</script>
