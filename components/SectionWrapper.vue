<template>
  <section>
    <div class="container">
      <slot name="title"></slot>
      <div
        data-aos-delay="300"
        data-aos="fade-in"
        class="text-xl xl:text-2xl flex flex-col gap-5"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>
