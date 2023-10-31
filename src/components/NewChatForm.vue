<template>
  <div>
    <textarea v-model="message" @keypress.enter.prevent="sendMessage"></textarea>
  </div>
</template>

<script>
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';
export default {
    data(){
        return{
            message:null
            
        }
    },
    methods:{
        sendMessage(){
            const {user} = getUser()
            const chat = {
                name: user.value.displayName,
                messageValue : this.message,
                createdAt: timestamp()
            }
            console.log(chat)
            
        }
    }
}
</script>

<style>

</style>