<template>
  <div id="app1">
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

<!DOCTYPE html>
<html lang="en">

<body>

 <!-- Add your content of header -->
<header>
  <nav class="navbar  navbar-fixed-top navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="nav_logo" href="./index.html" title="">
          <img src="../../public/nav/tj-logo.jpg" class="logo">
        </a>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-uarr">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="./" title="" class="active">Home</a></li>
          <li><a href="./accomodations" title=""> Accomodations</a></li>
          <li><a href="./facilities" title=""> Facilities </a></li>
          <li><a href="./gallery" title=""> Gallery </a></li>
          <li><a href="./contact" title="">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>




<!-- Google Analytics: change UA-XXXXX-X to be your site's ID 

<script>
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-XXXXX-X', 'auto');
  ga('send', 'pageview');
</script>

-->

</body>

</html>
</template>

<script>
// @ is an alias to /src
import ImageSlider from '@/components/ImageSlider.vue'
import mainscript from './main.41beeca9.js'

  document.addEventListener("DOMContentLoaded", function (event) {
    navActivePage();
  });

export default {
  name: 'Home',
  components: {
    ImageSlider
  }
}
</script>


<style scoped>
@import './main.a3f694c0.css';

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
.nav_logo {
  float:left;
  margin-top: 15px;
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
