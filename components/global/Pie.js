import { Pie } from 'vue-chartjs'
import Vue from 'vue'
export default Vue.component('PieChart', {
  extends: Pie,
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
})
