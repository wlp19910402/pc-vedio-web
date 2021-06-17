

<template>
  <div id="app" class="app">
    <div class="app-bg-box" :style="'background-color:'+banner[0].color[2]">
      <!-- <div class="app-bg" :style="!bgOpcaty?'background-image: url('+banner[0].url+');':''">
      </div> -->
    </div>
    <el-container class="qm-page-banner"
      :style="bgOpcaty?'width:100%;left:0;transition: all 1s;background-image: url('+banner[0].url+');height:660px;':'transition: all 1s; background-image: url('+banner[0].url+');height:600px;'">
      <el-header :style="bgOpcaty?'background-color:'+banner[0].color[0]+';transition: all 1s;':'transition: all 1s;'">
        <qm-header></qm-header>
      </el-header>
      <el-main id="main" ref="mian" class="qm-banner-main"
        :style="bgOpcaty?'background-image:linear-gradient('+banner[0].color[1]+'70%,'+banner[0].color[0]+','+banner[0].color[0]+');transition: all 1s;':'background-image:linear-gradient(transparent 70%,'+banner[0].color[0]+','+banner[0].color[0]+');transition: all 1s;'">
        <qm-main></qm-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import Swiper from 'swiper'
// import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// SwiperCore.use([ Navigation, Pagination ]);
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.css'
import QmHeader from './components/QmHeader.vue'
import QmMain from './components/QmMian.vue'
export default {
  data () {
    return {
      bgOpcaty: false,
      banner: [
        {
          id: 1001,
          url: require('./assets/images/banner/001.jpeg'),
          color: [ "#17181a", "rgba(33,34,37,0.9)", "#303236" ]
        },
        {
          id: 1002,
          url: require('./assets/images/banner/002.jpg'),
          color: [ "#182112", "#202b1a", "#3a4e2f" ]
        },
        {
          id: 1003,
          url: require('./assets/images/banner/003.jpeg'),
          color: [ "#171918", "#252927", "#323935" ]
        },
        {
          id: 1004,
          url: require('./assets/images/banner/004.jpg'),
          color: [ "#10181b", "#1c2d33", "#274049" ]
        },
        {
          id: 1005,
          url: require('./assets/images/banner/005.jpeg'),
          color: [ "#171918", "#252927", "#323935" ]
        }, {
          id: 1006,
          url: require('./assets/images/banner/006.jpeg'),
          color: [ "#182112", "#202b1a", "#3a4e2f" ]
        }, {
          id: 1007,
          url: require('./assets/images/banner/007.jpeg'),
          color: [ "#17181a", "#021a3d", "#012962" ]
        }
      ]
    };
  },
  components: {
    QmHeader,
    QmMain
  },
  mounted () {
    document.getElementById('main').addEventListener('scroll', e => {
      if (e.target.scrollTop > 220) {
        this.bgOpcaty = true
      } else {
        this.bgOpcaty = false
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped>
.app-bg-box {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
}
.app-bg {
  background-blend-mode: multiply;
  background-size: cover;
  width: calc(100% + 80px);
  min-height: calc(100% + 80px);
  position: absolute;
  filter: blur(20px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.qm-page-banner {
  background-size: cover;
  width: 90%;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  height: 600px;
  overflow: auto;
  transition: all 1s;
}
.qm-banner-main {
  transition: all 1s;
}
</style>

