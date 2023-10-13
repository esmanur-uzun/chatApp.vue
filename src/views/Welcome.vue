<template>
  <div class="main-container d-flex align-items-center ">
    <div class="container">
      <div class="beginning-page pt-4 pb-4 row flex-wrap d-flex justify-content-center align-items-center">
        <div class="col-lg-5">
          <div class="main-photo">
            <img class="vector" src="../assets/medias/2937927.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-5">
          <login></login>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  components: { Login },

}
</script>

<style lang="scss" scoped>
$body-color : #a8dadc;
$white-color: #fff;
.main-container{
  height: 100vh;
  background-color:$white-color;
}
.beginning-page{
  background-color: $body-color;
  border-radius: 20px;
}
</style>
