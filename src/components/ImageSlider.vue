<template>  

    <div class="container">
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[0])" class="responsive">
        </div>
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[1])" class="responsive">
        </div>
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[2])" class="responsive">
        </div>
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[3])" class="responsive">
        </div>
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[4])" class="responsive">
        </div>
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[5])" class="responsive">
        </div>
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[6])" class="responsive">
        </div>
        
        <div class="slide-container fade1">
            <img :src="getImgUrl(images[7])" class="responsive">
        </div>

    <div class="controllers">
      <a @click="pushSlides(-1)" class="prev">&#10094;</a>
      <a @click="pushSlides(1)" class="next">&#10095;</a>
    </div>

  </div>



  <div class="indicators">
      <span onclick="currentSlide(1)" class="dots"></span>
      <span onclick="currentSlide(2)" class="dots"></span>
      <span onclick="currentSlide(3)" class="dots"></span>
  </div>
</template>


<script>

export default {
  name: "Slider",
  data() {
    return {
      img_loc : [0],
      images: [
        'banner1.jpg',
        'frontdesk1.jpg',
        'frontdesk2.jpg',
        'esuite1.1.jpg',
        'esuite1.4.jpg',
        'esuite2.1.jpg',
        'esuite2.5.jpg',
        'office1.jpg',
      ],
      currentImg: 'banner1.jpg',
      slideIndex : 1,
      currentIndex: 0, 
    };
  },

  mounted: function() {
    // this.addSlide();
    this.showSlide(this.slideIndex);
    this.startSlide();
  },

  methods : {
    pushSlides: function(n){
      this.showSlide(this.slideIndex += n)
    },

    showSlide : function (n) {
      let i;
      let slides = document.getElementsByClassName("slide-container");

      if (n > slides.length) {this.slideIndex = 1};
      if (n < 1 ) {this.slideIndex = slide.length};
      for (i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
      };
      if (slides.length !== 0){
              slides[this.slideIndex-1].style.display = "block";
      }
    },

    startSlide: function () {
      return setInterval(
        () => {
          this.pushSlides(1)
        },
        5000
      );
    },

    getImgUrl(pic) {
      return require('../../public/pictures/'+pic)
    } 


  }


};
</script>

<style scoped>
body{
    font-family: sans-serif;
    margin: 0;
    background: black;
  }
  
  .container{
    position: relative
  }

  .slide-container{
    position: relative;
  }
  
  .myslides{
    margin-top: 100px;
    display: none;
  }
  
  .slider-img{
    height: auto;
    max-width: 500px;
    width: 100%;
  }
  
  .caption{
    text-align: center;
    margin-top: 15px;
    width: 100%;
    color: white;
    font-size: 18px;
  }
  
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
  
  .next{
    float: right;
  }
  
  .prev:hover, .next:hover{
    color: gray;
  }
  
  .indicators{
    text-align: center;
    margin-top: 10px;
  }
  
  .dots{
    width: 12px;
    height: 12px;
    background: white;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .active, .dots:hover{
    background-color: grey;
  }
  
  .fade1{
    animation-name: fade1;
    animation-duration: 1s;
  }
  
  @keyframes fade1{
    from{opacity: 0;}
    to{opacity: 1;}
  }  

.responsive {
    width: 100%;
    transition: 0;
}

@media (min-width:2000px) {
  .responsive{
    width : 100%;
    height: 900px;
    object-fit: cover;
  }
}
</style>