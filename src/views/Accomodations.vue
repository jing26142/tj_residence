
<template>
  <h1>Accomodations</h1>
  <br>
  <p class="descriptions">
    TJ Residence provides a wide variety of options for both monthly and daily
    stays to best suit the needs of our guests. <br>
    For bookings or more information, please do not hesitate to call us directly.
  </p>
  <br>
  <h1>Daily Stays</h1>
  <br>
  
  
  <div class="wrapper">
    <div class="acc-room">
      <div>
        <img class="accom-img" :src="getImgUrl(daily700[img_loc[0]])">
        <div position="absolute">
          <a class="prev" @click="prev(daily700, 0)">&#10094;        </a>
          <a class="next" @click="next(daily700, 0)">&#10095;        </a> 
        </div>
      </div>
    </div>
    <div class="acc-room-desc">
      <h2 class="room_headers">Executive Suite</h2>
      <p>
        Comes in either double beds or a single king bed. <br>
        Suitable for up to 3 persons. <br>
        700 baht per night.
      </p>
      <p style="font-style:italic">
        Facilities: A/C, Wifi, Refridgerator, Television, Closet etc.
      </p>
    </div>
  </div>
  <br>
  
 
  <div class="wrapper">
    <div class="acc-room">
      <div>
        <img class="accom-img" :src="getImgUrl(daily500[img_loc[1]])">
        <div position="absolute">
          <a class="prev" @click="prev(daily500, 1)">&#10094;        </a>
          <a class="next" @click="next(daily500, 1)">&#10095;        </a> 
        </div>
      </div>
    </div>
    <div class="acc-room-desc">
      <h2 class="room_headers">Suite</h2>
      <p>
        Comes in either double beds or a single king bed. <br>
        Suitable for up to 3 persons. <br>
        500 baht per night.
      </p>
      <p style="font-style:italic">
        Facilities: A/C, Wifi, Refridgerator, Television, Closet etc.
      </p>
    </div>
  </div>
  <br>



  <h1>Monthly Stays</h1>
  <br>
  <div class="wrapper">
    <div class="acc-room">
      <div>
        <img class="accom-img" :src="getImgUrl(monthly[img_loc[2]])">
        <div position="absolute">
          <a class="prev" @click="prev(monthly, 2)">&#10094;        </a>
          <a class="next" @click="next(monthly, 2)">&#10095;        </a> 
        </div>
      </div>
    </div>
    <div class="acc-room-desc">
      <h2 class="room_headers">Apartment Rentals</h2>
      <p>
        Comes in either double beds or a single king bed. <br>
        Suitable for up to 3 persons. <br>
      </p>
      <p style="font-style:italic">
        Facilities: A/C, Wifi, Refridgerator, Closet etc.
      </p>
    </div>
  </div>
  

  <br>
</template>

<script>
import {next, prev, checklen} from '../components/img_slide.js'
export default {
  data() {
    return {
      img_loc : [0,0,0],
      daily700: [
      'esuite1.1.jpg',
      'esuite1.2.jpg',
      'esuite1.3.jpg',
      'esuite1.4.jpg',
      'esuite1.5.jpg',
      'esuite1.6.jpg',
      ],
      daily500: [
        'suite1.1.jpg',
        'suite1.2.jpg',
        'suite1.3.jpg',
        'suite1.4.jpg',
        'suite1.5.jpg',
      ],
      monthly : [
        'monthly1.1.jpg',
        'monthly1.2.jpg',
        'monthly1.3.jpg',
        'monthly1.4.jpg',
        'monthly1.5.jpg',
        'monthly1.6.jpg',
        'monthly1.7.jpg',
      ]
    }
  },

  methods : {
    // next : function (imgarr, index) {
    //   this.img_loc[index] = this.img_loc[index] + 1;
    //   let loc = this.checklen(imgarr, index);
    //   return imgarr[loc]
    // },

    // prev : function (imgarr, index) {
    //   this.img_loc[index] = this.img_loc[index] - 1;
    //   let loc = this.checklen(imgarr, index);
    //   return imgarr[loc]
    // },
    next : function(imgarr, index) {
      let result = next(this.img_loc, imgarr, index)
      this.img_loc[index] = result.image_loc
      return result.image
    },
    prev : function(imgarr, index) {
      let result = prev(this.img_loc, imgarr,index)
      this.img_loc[index] = result.image_loc
      return result.image
    },

    checklen : function(imgarr, index){
      if (this.img_loc[index] > imgarr.length-1){
        this.img_loc[index] = 0
      } else if (this.img_loc[index]<0) {
        this.img_loc[index] = imgarr.length-1
      } else {
        this.img_loc[index] = this.img_loc[index]
      };
      return this.img_loc[index]
    },
    getImgUrl(pic) {
      return require('../../public/pictures/'+pic)
    } 
  }

}
</script>

<style>
.accom-img{
  width:100%;
}

.wrapper{
    background: rgb(255, 236, 212);
    /* background: rgb(255, 255, 255); */
    
    /* margin: auto; */
    /* position: relative; */
    top: -100px;
    
}


.wrapper:after {
    background: (255,255,255);
    content: "";
    display: block;
    clear: both;
    top: -100px;
    margin-bottom: -4px;
}

.acc-room{
  /* background: #999; */
  width: 50%;
  float: left;
  position: relative;
}

.acc-room-desc {
  /* background: #ccc; */
  width: 50%;
  float: left;
  text-align: center;
  margin-top: 5%;
  
}


.room_headers{
  font-family: Times, serif;
  color: rgb(236, 15, 15)
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
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

@media (max-width:730px) {
  .acc-room{
    width:100%;
  }
  .acc-room-desc{
    width:100%;
    margin-top: 0%;
    margin-bottom: 2%;
  }
}
</style>