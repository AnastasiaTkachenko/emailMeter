<template>
  <div class="userDetails">
 <router-view/>

<Apexchart/>
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
