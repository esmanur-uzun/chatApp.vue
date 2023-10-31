<template>
  <div>
    <navbar></navbar>
    <new-chat-form></new-chat-form>
  </div>
</template>

<script>
import { watch } from 'vue'
import getUser from "../composables/getUser"
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
export default {
  components: { Navbar, NewChatForm },
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