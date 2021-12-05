<template>
 <div>
      <img src="~/assets/img/wave_top.svg" alt="" class="w-screen" />
      <!-- temporary set height for div -->
      <div class="h-screen bg-primary">
          <slot></slot>
      </div>
      <img src="~/assets/img/wave_bottom.svg" alt="" class="w-screen" />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>