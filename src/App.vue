<template class="dp">
  <div id="nav-container">
    <div id="nav" width="100%" class="nav-top">
      <div>
        <router-link to="/" class="nav-text">Home</router-link> |
        <router-link to="/accomodations" class="nav-text">Accomodations</router-link> |
        <router-link to="/facilities" class="nav-text">Facilities</router-link> |
        <router-link to="/gallery" class="nav-text">Gallery</router-link> |
        <router-link to="/contact" class="nav-text">Contact Us</router-link> 
      </div>
    </div>
    <div class="nav_logo">
      <img class="logo" src="../public/nav/tj-logo.jpg">
    </div>
  </div>

      
  <router-view/>
</template>


<script>
</script>

<style>
@media screen and (max-width: 601px){
  template.div#nav-container.logo{
    display: hidden;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}
.logo{
  width: 250px;
}
#nav-container{
    background: #fff;
    margin: auto;
}
#nav-container:after {
  content: "";
  display: block;
  clear: both;
}
#nav {
  padding: 30px;
  font-size: 20px;
}
.nav-top {
  float:right;
}
.nav_logo {
  float:left;
  padding: 10px;
  margin-top: 15px;
}
#nav a {
  color: #42b983;
  text-decoration: none;
  font-size: 90%;
}
#nav a:hover {
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #2c3e50;
  background: rgb(255, 255, 255);
}
body {
  margin: 0
}
</style>