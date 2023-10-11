<template>
  <div class="main-container d-flex align-items-center ">
    <div class="container">
      <div class="beginning-page pt-4 pb-4 row flex-wrap d-flex justify-content-center align-items-center">
        <div class="col-lg-5">
          <div class="main-photo">
            <img src="../assets/medias/2937927.jpg" alt="">
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
  background-color:$body-color;
}
.beginning-page{
  background-color: $white-color;
  border-radius: 20px;
}
.main-photo{
  width: 100%;
  height: 60vh;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
 
}
</style>
