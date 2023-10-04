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
  </form>
</template>

<script>
export default {
    data(){
        return{
            userData:{
                email:null,
                password:null
            }
        }
    }
}
</script>

<style>

</style>