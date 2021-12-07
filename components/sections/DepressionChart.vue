<template>
  <div class="container">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <client-only>
        <PieChart
          :chartdata="dataset"
          data-aos-delay="300"
          data-aos="fade-right"
          class="order-2 md:order-1"
        />
      </client-only>
      <div
        data-aos-delay="300"
        data-aos="fade-right"
        class="
          text-white
          flex-1
          justify-center
          flex-col flex
          md:items-left
          gap-4
          md:gap-0
          order-1
          md:order-2
        "
      >
        <h2 class="text-4xl md:text-6xl">Dlaczego projekt o depresji?</h2>
        <p class="text-xl">
          Zauważyliśmy, że problem depresji dotyka naszego otoczenia, dlatego
          też wyszliścmy z inicjatywą przeprowadzenia ankiet wśród naszych
          rówieśników. Na ponad 100 zapytanych osób, 84 wypowiedziały się, że
          znają osoby ze stadium depresji.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataset: {
        labels: ['Tak', 'Nie'],
        datasets: [
          {
            label: 'Czy znasz osobę ze stwierdzonym stadium depresji',
            data: [84, 28],
            backgroundColor: ['#2F2E41', '#595dd4'],
            hoverOffset: 4,
          },
        ],
      },
    }
  },
}
</script>
