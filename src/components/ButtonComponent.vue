<template>
<button @click="$emit('chartTypeSelected')" class ="uppercase border-b-2 border-blue-400 text-xs md:text-lg hover:text-blue-500 " > {{buttonName}}
</button>
   
</template>



<script>
export default  {
   name:"ButtonComponent", 
  props: {
    buttonName: {
      type: String,
    },
  },
}
</script>



