<template>
  <div>
    <navbar></navbar>
  </div>
</template>

<script>
import { watch } from 'vue'
import getUser from "../composables/getUser"
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
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