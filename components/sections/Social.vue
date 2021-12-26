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
        class="grid grid-cols-2 gap-10 mt-10 md:mt-4 justify-items-center md:justify-items-start"
      >
        <div>
          <a href="https://www.facebook.com/DepressOut-102231069004407"
            ><img class="h-16 md:h-full" src="~/assets/img/fb.svg" alt="facebook icon"
          /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/depressout.pl/"
            ><img class="h-16 md:h-full" src="~/assets/img/insta.svg" alt="insta icon"
          /></a>
        </div>
      </div>
    </template>
  </SectionWrapperColumns>
</template>
