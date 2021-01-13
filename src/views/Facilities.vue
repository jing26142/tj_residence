<template>
  <h1>Facilities</h1>
  <br>
  <p class="descriptions">
    We provide a variety of services to ensure our guest a pleasant stay. As shown
    below, our guests enjoy on premise laundry machine, spacious parking lot, and
    an affordable high quality coffee + other refreshments for a relaxing stay.
  </p>

  <div class="wrapper">
    <div class="acc-room">
      <div>
        <img class="accom-img" :src="getImgUrl(laundry[img_loc[0]])">
        <div position="absolute">
          <a class="prev" @click="prev(laundry, 0)">&#10094;        </a>
          <a class="next" @click="next(laundry, 0)">&#10095;        </a> 
        </div>
      </div>
    </div>
    <div class="acc-room-desc">
      <h2 class="room_headers">Laundry Machine</h2>
      <p>
        Coin slot laundry machine available for all our guests. <br>
      </p>
      <p style="font-style:italic">
        40 baht per load
      </p>
    </div>
  </div>
  <br>
  

  <div class="wrapper">
    <div class="acc-room">
      <div>
        <img class="accom-img" :src="getImgUrl(coffee[img_loc[1]])">
        <div position="absolute">
          <a class="prev" @click="prev(coffee, 1)">&#10094;        </a>
          <a class="next" @click="next(coffee, 1)">&#10095;        </a> 
        </div>
      </div>
    </div>
    <div class="acc-room-desc">
      <h2 class="room_headers">Coffee Machine</h2>
      <p>
        Coin slot coffee machine and a variety of other refreshing drinks <br>
        such chocolate and green tea <br>
        
      </p>
      <p style="font-style:italic">
        Only 10 baht per drink
      </p>
    </div>
  </div>
  <br>
  <div class="wrapper">
    <div class="acc-room">
      <div>
        <img class="accom-img" :src="getImgUrl(parking[img_loc[2]])">
        <div position="absolute">
          <a class="prev" @click="prev(parking, 2)">&#10094;        </a>
          <a class="next" @click="next(parking, 2)">&#10095;        </a> 
        </div>
      </div>
    </div>
    <div class="acc-room-desc">
      <h2 class="room_headers">Parking Lot</h2>
      <p>
        Spacious parking reserved for guests. <br>
        
        
      </p>
      <p style="font-style:italic">
      </p>
    </div>
  </div>

  
</template>

<script>
import {next, prev, checklen} from '../components/img_slide.js'
export default {
  data() {
    return {
      img_loc : [0,0,0],
      laundry: [
        'laundry1.jpg',
        'laundry2.jpg',
        'laundry3.jpg',
      ],
      coffee: [
        'coffee1.jpg',
        'coffee2.jpg',
        'coffee3.jpg'
      ],
      parking: [
        // 'parking1.jpg',
        'parking2.jpg',
        'parking3.jpg',
        'parking4.jpg',
      ]
    }
  },

  methods: {
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
    getImgUrl(pic) {
      return require('../../public/pictures/'+pic)
    },
  }
}
</script>

<style>
.fac-img{
  width:100%;
}

.descriptions {
  padding: 0% 5%;
}
</style>