<template>
  <div>chat</div>
</template>

<script>
import { watch } from 'vue'
import getUser from "../composables/getUser"
export default {
  created(){
    const {user} = getUser()
    
    watch(user, ()=>{
      if(!user.value){
        $router.push({name: "Welcome"})
      }
    })
  }
}
</script>

<style>

</style>