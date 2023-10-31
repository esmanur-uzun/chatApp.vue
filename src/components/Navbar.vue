<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">ChatApp</a>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>{{userData.displayName }}</span>
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item account btn" >Account</button></li>
            <li><button @click="logOut" class="dropdown-item logout btn" >Log Out</button></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import getUser from '../composables/getUser';
import useLogout from "../composables/useLogout"
export default {
  data(){
    return{
      userData: null
    }
  },
  created(){
    const {user} = getUser()
    this.userData = user.value
    
  },
  methods:{
    async logOut(){
      const {logout, error} = useLogout()
      await logout()
      if(!error.value){
        this.$router.push({name:"Welcome"})
      }
    },
  }
};

</script>

<style lang="scss" scoped>
$color : #3e5c76;
.navbar{
    background-color: $color;
    .navbar-brand{
        color: white;
    }
    .logout{
      background-color: rgb(200, 30, 30);
      color: #fff;
      border-radius: 10px;
    }
    .account{
      background-color: rgb(103, 193, 103);
      color: #fff;
      border-radius: 10px;
    }
}
</style>
