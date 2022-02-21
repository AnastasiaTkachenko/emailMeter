<template>
  <div class="userDetails mx-4 md:mx-12 tracking-widest">
    <router-view/>
  
      <div class="w-auto mt-10 border-b py-4 md:py-8 text-gray-600 border-gray-600"> USER:</div>
     

     <a href="" class=" absolute top-8 right-4 md:right-12 py-2 px-10 md:py-3 md:px-14 border-solid border border-black text-sm cursor-pointer ">HOME</a>


<div class="flex justify-between py-8 ">
        <div class="text-xl md:text-4xl"> Show activity</div>
         <div class="uppercase py-2 "> display in:</div>
      <button class="uppercase border-b-2 border-blue-400">bar graph</button>
      <button class="uppercase border-b-2 border-blue-400">heat map</button>
</div>
  <div class="flex w-36  "> 
        <button class=" tracking-widest bg-blue-500 font-bold px-8 py-2 text-white">months</button>
        <button class=" tracking-widest bg-blue-500 px-8 py-2 ml-6 font-bold text-white">weeks</button>
  </div>

     
      
  <div class="flex justify-center mt-48"> 
    <Apexchart/>
    </div>
    <Footer/>
  </div>
</template>


<script>
import Footer from "@/components/Footer";
import Apexchart from "@/components/Apexchart";

export default {
  name: "UserDetails",
  components: {Footer, Apexchart}

}
</script>
