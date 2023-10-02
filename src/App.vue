<script setup>
import Welcome from "./views/Welcome.vue";



  components: { Welcome } 
</script>

<template>
  <div>
    <router-view></router-view>
    <welcome></welcome>
  </div>
  
</template>

<style scoped>

</style>
