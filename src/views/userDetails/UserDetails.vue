<template>
  <div class="userDetails mx-4 md:mx-12 tracking-widest">
    <router-view/>
    <div class="w-auto mt-10 border-b py-4 md:py-8 text-gray-600 border-gray-600"> USER:</div>
    <a href="/"
       class="absolute top-8 right-4 md:right-12 py-2 px-10 md:py-3 md:px-14 border-solid border border-black text-sm cursor-pointer hover:bg-blue-600 hover:text-white hover:border-white">HOME</a>
       <span></span>
    <div class="flex justify-between py-8 ">
      <div class="text-xl md:text-4xl"> Show activity</div>
      <div class="uppercase py-2 ml-36 text-xs md:text-lg "> display in:</div>

      <ButtonComponent buttonName="bar"
          @chartTypeSelected="setChartType('bar')"/> 

          <ButtonComponent buttonName="heatmap"
          @chartTypeSelected="setChartType('heatmap')"/> 
         
    </div>
    <div class="flex w-36">
      <button class="tracking-widest bg-blue-500 font-bold px-8 py-2 text-white hover:bg-blue-600">
        months
      </button>
      <button class=" tracking-widest bg-blue-500 px-8 py-2 ml-6 font-bold text-white hover:bg-blue-600">weeks</button>
    </div>

    <div class="flex justify-center mt-48">
      <Apexchart :chartType="chartType"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Apexchart from "@/views/userDetails/Apexchart";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "UserDetails",
  components: {Footer, Apexchart, ButtonComponent},
  data() {
    return {
      chartType: "bar",
    }
  },
  methods: {
    setChartType(type) {
      this.chartType = type
    }
  },
}

</script>
