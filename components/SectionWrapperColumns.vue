<template>
  <section>
    <div class="container">
      <slot name="title"></slot>
      <h2 data-aos-delay="300"
          data-aos="fade-down"
          class="text-4xl md:text-6xl text-center mb-10">
        <slot name="animated-title"></slot>
      </h2>

      <div
        class="text-xl xl:text-2xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-40 text-center md:text-left"
      >
        <div
          class="flex flex-col md:items-start md:justify-center gap-0 md:gap-4"
          data-aos-delay="300"
          data-aos="fade-right"
        >
          <slot name="col-left"></slot>
        </div>
        <div
          class="flex flex-col md:items-start md:justify-center gap-0 md:gap-4"
          data-aos-delay="300"
          data-aos="fade-left"
        >
          <slot name="col-right"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
