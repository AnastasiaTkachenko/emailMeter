<template>
  <div class="userDetails">
 <router-view/>


<Footer/>
  </div>
</template>


<script>
import Footer from "@/components/Footer";

export default {
  name: "UserDetails",
  components: {Footer},

}
</script>
