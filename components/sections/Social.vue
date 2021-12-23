<template>
  <SectionWrapperColumns>
    <template #col-left>
      <img class="hidden md:block" src="~/assets/img/sections/social.svg" alt="" />
    </template>
    <template #col-right>
      <h2 class="text-black text-4xl md:text-6xl">
        Chcesz dowiedzieć się więcej?
      </h2>
      <p class="text-black">Śledź nasze social-media!</p>
      <div
        class="grid grid-cols-3 gap-10 mt-10 md:mt-4 justify-items-center md:justify-items-start"
      >
        <div>
          <a href="https://zspm.pl/"
            ><img class="h-16 md:h-full" src="~/assets/img/fb.svg" alt=""
          /></a>
        </div>
        <div>
          <a href="https://zspm.pl/"
            ><img class="h-16 md:h-full" src="~/assets/img/insta.svg" alt=""
          /></a>
        </div>
        <div>
          <a href="https://zspm.pl/"
            ><img class="h-16 md:h-full" src="~/assets/img/twitter.svg" alt=""
          /></a>
        </div>
      </div>
    </template>
  </SectionWrapperColumns>
</template>
