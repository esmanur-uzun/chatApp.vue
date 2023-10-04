<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-floating mb-3">
      <input
        type="string"
        class="form-control"
        id="floatingInput"
        placeholder="Name Surname"
        v-model="userData.fullName"
      />
      <label for="floatingInput">Full name</label>
    </div>
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
    <button type="submit" class="btn-danger btn">Sign Up</button>
  </form>
</template>

<script>

export default {
    data(){
        return{
            userData:{
                fullName: null,
                email: null,
                password: null
            }
        }
    },
    methods:{
        handleSubmit(){
            console.log(this.userData)
        }
    }
};
</script>

<style></style>
