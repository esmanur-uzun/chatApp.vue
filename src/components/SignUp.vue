<template>
  <div class="main-container d-flex align-items-center">
    <div class="container">
      <div
        class="row flex-wrap d-flex justify-content-center align-items-center"
      >
        <div class="col-lg-5">
          <div class="main-photo">
            <img src="../assets/medias/5124556.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-5">
          <form @submit.prevent="handleSubmit">
          <div class="err">{{ er }}</div>
          <div class="form-floating mb-3">
            <input
              type="string"
              class="form-control"
              id="floatingInput"
              placeholder="Name Surname"
              required
              v-model="userData.displayName"
            />
            <label for="floatingInput">Full name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
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
              required
              v-model="userData.password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" class="btn-danger mt-4 btn">Sign Up</button>
          <span class="d-flex align-items-end pt-3">
            Do you have an account? 
            <router-link :to="{name:'Welcome'}">Please login</router-link>

          </span>
        </form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import useSignup from "../composables/useSignup";
export default {
  data() {
    return {
      userData: {
        displayName: null,
        email: null,
        password: null,
      },
      err: "",
    };
  },
  methods: {
    async handleSubmit() {
      const { error, signup } = useSignup();
      await signup(
        this.userData.email,
        this.userData.password,
        this.userData.displayName
      );
      if (!error.value) {
        this.$router.push({ name: "ChatRoom" });
      } else {
        this.err = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  height: 100vh;
}
.err{
  color:red;
}
.btn{
  padding:10px 30px;
}
</style>
