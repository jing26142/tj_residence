<template>
<div>
  <div v-if="showImg">
    <ShowImg :selectImage="selectImage" @close="toggleImg('')">
    </ShowImg>
  </div>
  <div v-if="!showImg" >
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
  </div>
    <h1>Gallery</h1>


    <div class="gall-wrapper">
      <div v-for="image in images" :key="image">
        <div class="gall-img-block">
          <img @click="toggleImg(image)" class="gall-img" :src="getImgUrl(image)">
        </div>
      </div>
    </div>
</div>

</template>

<script>
import ShowImg from '../components/showimg.vue'
export default {
  name: 'Gallery',

  data() {
    return {
      images:{
        banner1 : 'banner1.jpg',
        frontdesk1 : 'frontdesk1.jpg',
        frontdesk2 : 'frontdesk2.jpg',
        coffee1 : 'coffee1.jpg',
        coffee2 : 'coffee2.jpg',
        coffee3 : 'coffee3.jpg',
        esuite1_1 : 'esuite1.1.jpg',
        esuite1_2 : 'esuite1.2.jpg',
        esuite1_3 : 'esuite1.3.jpg',
        esuite1_4 : 'esuite1.4.jpg',
        esuite1_5 : 'esuite1.5.jpg',
        esuite1_6 : 'esuite1.6.jpg',
        esuite2_1 : 'esuite2.1.jpg',
        esuite2_2 : 'esuite2.2.jpg',
        esuite2_4 : 'esuite2.4.jpg',
        hallway1 : 'hallway1.jpg',
        hallway2 : 'hallway2.jpg',
        laundry1 : 'laundry1.jpg',
        laundry2 : 'laundry2.jpg',
        laundry3 : 'laundry3.jpg',
        suite1_1 : 'suite1.1.jpg',
        suite1_2 : 'suite1.2.jpg',
        suite1_3 : 'suite1.3.jpg',
        suite1_4 : 'suite1.4.jpg',
        suite1_5 : 'suite1.5.jpg',
        monthly1_1 : 'monthly1.1.jpg',
        monthly1_2 : 'monthly1.2.jpg',
        monthly1_3 : 'monthly1.3.jpg',
        monthly1_4 : 'monthly1.4.jpg',
        monthly1_5 : 'monthly1.5.jpg',
        office1 : 'office1.jpg',
        parking1 : 'parking1.jpg',
        parking2 : 'parking2.jpg',
        parking3 : 'parking3.jpg',
        parking4 : 'parking4.jpg',
        roadview : 'roadview.jpg',
      },
      showImg: false,
      selectImage: ''
    }
  },
  components: {
    ShowImg
  },
  methods: {
    toggleImg : function (img) {
      this.selectImage = img;
      this.showImg = !this.showImg;
    },
    getImgUrl(pic) {
      return require('../../public/pictures/'+pic)
    } 
  }
}
</script>

<style scoped>

.gall-wrapper{
  background: grey;
  /* margin: 10px; */
}

.gall-img{
  width: 100%;
}
.gall-img-block{
  float: left;
  width: 31%;
  margin: 1%;
  padding: 1%;
  background: #eee;
}

.gall-wrapper:after{
  content: "";
  display: block;
  clear: both;
}


</style>