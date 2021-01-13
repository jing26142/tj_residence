<template>
  <div id="app">
    <ImageSlider/>
  </div>
  <div class="home_desc">
    <h1 class="home_title">TJ Residence</h1>

    <h3>Service Apartment in Bangkok</h3>

    <p>
      TJ Residence is a fully furnished apartment with rooms available for both
      daily and monthly stays. Our apartment is conveniently located near Dhurakij
      Pundit University and Provincial Electricity Authority's Headquarters.
      With taxis all along the Chinnakhet road, TJ Residence is a perfect
      stay for anyone who is looking to make trips to the downtown area
      and is only a 10-minute drive away from Central Ladprao.
    </p>

    <p>
      For more information/reservation details, please feel free to call us at
      02-954-6110. We look forward to serving you soon!
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Home',
  components: {
    ImageSlider
  }
}
</script>


<style scoped>
.home_title {
  font-family: Times;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.home_desc{
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}
/* 
@media (max-width:730px) {
  .home_desc{
    width : 100%;
  }
} */

</style>