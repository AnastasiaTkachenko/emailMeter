<template>
     <apexchart width="500" :type="chartType" :options="chartOptions" :series="series"/>
</template>

<script>

export default {
    props: {
    chartType: {
      type: String,
      default: "bar",
    },
  },
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: "",
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
};
   



</script>
