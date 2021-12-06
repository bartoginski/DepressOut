<template>
 <div>
      <img src="~/assets/img/wave_top.svg" alt="" class="w-screen -m-px" />
      <!-- temporary set height for div -->
      <div class="flex flex-col gap-20 md:gap-40 py-10 md:py-0 bg-primary">
          <slot></slot>
      </div>
      <img src="~/assets/img/wave_bottom.svg" alt="" class="w-screen -m-px" />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>