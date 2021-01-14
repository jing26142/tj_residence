<template class="dp">
      <!-- <div>
        <router-link to="/" class="nav-text">Home</router-link> |
        <router-link to="/accomodations" class="nav-text">Accomodations</router-link> |
        <router-link to="/facilities" class="nav-text">Facilities</router-link> |
        <router-link to="/gallery" class="nav-text">Gallery</router-link> |
        <router-link to="/contact" class="nav-text">Contact Us</router-link> 
      </div> -->
    <!-- <header> -->
      <nav class="navbar  navbar-fixed-top navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/" class="nav_logo">
              <img src="../public/nav/tj-logo.jpg" class="logo">
            </router-link>
          </div>

          <div class="collapse navbar-collapse" id="navbar-collapse-uarr">
            <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/" title="" class="active">Home</router-link></li>
            <li><router-link to="/accomodations" class="nav-text">Accomodations</router-link></li>
            <li><router-link to="/facilities" class="nav-text">Facilities</router-link></li>
            <li><router-link to="/gallery" class="nav-text">Gallery</router-link></li>
            <li><router-link to="/contact" class="nav-text">Contact Us</router-link> </li>
            </ul>
          </div>
          <!-- <div class="collapse navbar-collapse" id="navbar-collapse-uarr">
            <ul class="nav navbar-nav navbar-right">
            <li><a href="./" title="" class="active">Home</a></li>
            <li><a href="./accomodations" title=""> Accomodations</a></li>
            <li><a href="./facilities" title=""> Facilities </a></li>
            <li><a href="./gallery" title=""> Gallery </a></li>
            <li><a href="./contact" title="">Contact Us</a></li>
            </ul>
          </div> -->
        </div>
      </nav>
    <!-- </header> -->
  
  <router-view/>

  <footer>
    <div class="section-container footer-container">
        <div class="container">
            <div class="row">
                    <div class="col-md-4">
                        <h4>TJ Residence</h4>
                        <p>31/112 Chinnakhet 2/16 Alley, Thung Song Hong, Lak Si, Bangkok 10210</p>
                    </div>

                    <div class="col-md-4">
                        <h4>Contact Us:</h4>
                        <p>Tel: 02-954-6110
                          <br>
                          <a href="https://www.facebook.com/tjresidence" class="social-round-icon white-round-icon fa-icon" title="">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </p>
                    </div>
            </div>
        </div>
    </div>
</footer>
</template>


<script>

</script>

<style>
@import './views/main.a3f694c0.css';
@media screen and (max-width: 601px){
  template.div#nav-container.logo{
    display: hidden;
  }
}

.active{
  color: black;
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