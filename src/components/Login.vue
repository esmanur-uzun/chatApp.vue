<template>
  <form @submit.prevent="submit">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="userData.email"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="userData.password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button type="submit" class="btn-danger btn">Login</button>
    <div class="err">{{ err }}</div>
  </form>
</template>

<script>
import useLogin from '../composables/useLogin';
export default {
    data(){
        return{
            userData:{
                email:null,
                password:null
            },
            err: null
        }
    },
    methods:{
      async submit(){
        const {login, error} = useLogin()
        await login(this.userData.email, this.userData.password)

        if(!error.value){
          this.$router.push({name: "ChatRoom"})
        }
        else{
          this.err= error.value
        }
      }
    }
}
</script>

<style>

</style>