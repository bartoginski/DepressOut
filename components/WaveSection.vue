<template>
 <div>
      <img src="~/assets/img/wave_top.svg" alt="" class="w-screen wave__top" />
      <!-- temporary set height for div -->
      <div class="flex flex-col gap-20 md:gap-40 py-10 md:py-0 bg-primary">
          <slot></slot>
      </div>
      <img src="~/assets/img/wave_bottom.svg" alt="" class="w-screen wave__bottom" />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .wave {
        &__top {
            margin-bottom: -1px;
        }
        &__bottom {
            margin-top: -1px;
        }
    }

</style>