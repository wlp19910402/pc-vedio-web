<template>
  <!-- <fullscreen ref="fullscreen" class="fullscreenClass" :wrap="true" @change="fullscreenChange"> -->
  <div id="app" class="app">

    <div class="app-bg-box" :style="'background-color:'+banner[curIndex].color[2]">
    </div>
    <div class="qm-full-screen-a" @click="openBai">百度</div>
    <!-- <a class="qm-full-screen-a" href="http://www.baidu.com" target="_top">百度</a> -->
    <div class="qm-full-screen" id="full" @click="clickFullscreen">full</div>
    <el-container class="qm-page-banner"
      :style="bgOpcaty?'width:100%;left:0;transition: all 1s;background-image: url('+banner[curIndex].url+');height:660px;':'transition: all 1s; background-image: url('+banner[curIndex].url+');height:600px;'">
      <el-header
        :style="bgOpcaty||bannerSwiperSlide?'background-color:'+banner[curIndex].color[0]+';transition: all 1s;':'transition: all 1s;'">
        <qm-header></qm-header>
      </el-header>
      <el-main id="main" ref="mian" class="qm-banner-main"
        :style="bgOpcaty?'background-image:linear-gradient('+banner[curIndex].color[1]+'70%,'+banner[curIndex].color[0]+','+banner[curIndex].color[0]+');transition: all 1s;':!bannerSwiperSlide?'background-image:linear-gradient(transparent 70%,'+banner[curIndex].color[0]+','+banner[curIndex].color[0]+');transition: all 1s;':'background-color:'+banner[curIndex].color[0]+';'">
        <div v-show="bannerSwiperSlide" ref="swiperd" class="swiper-container swiper-container-box">

          <div class="swiper-wrapper">
            <div v-for="(item,index) in banner " :key="index" class="swiper-slide">
              <img :src="item.url" @click.stop="switchOneSea" />
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
        <qm-main v-show="!bannerSwiperSlide" :switchAllSea="switchAllSea"></qm-main>
      </el-main>
    </el-container>
  </div>
  <!-- </fullscreen> -->
</template>

<script>
import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([ Navigation, Pagination ]);
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import QmHeader from './components/QmHeader.vue'
import QmMain from './components/QmMian.vue'
import screenfull from 'screenfull'
export default {
  data () {
    return {
      bgOpcaty: false,
      bannerSwiperSlide: false,
      curIndex: 1,
      banner: [
        {
          id: 1001,
          url: require('./assets/images/banner/001.jpeg'),
          color: [ "#17181a", "rgba(33,34,37,0.9)", "#303236" ]
        },
        {
          id: 1002,
          url: require('./assets/images/banner/002.jpg'),
          color: [ "#182112", "rgba(24,33,18,0.9)", "#3a4e2f" ]
        },
        {
          id: 1003,
          url: require('./assets/images/banner/003.jpeg'),
          color: [ "#171918", "rgba(23,25,24,0.9)", "#323935" ]
        },
        {
          id: 1004,
          url: require('./assets/images/banner/004.jpg'),
          color: [ "#10181b", "rgba(16,24,27,0.9)", "#274049" ]
        },
        {
          id: 1005,
          url: require('./assets/images/banner/005.jpeg'),
          color: [ "#051320", "rgba(5,19,32,0.9)", "#092138" ]
        }, {
          id: 1006,
          url: require('./assets/images/banner/006.jpeg'),
          color: [ "#182112", "rgba(24,33,18,0.9)", "#2f3e27" ]
        }, {
          id: 1007,
          url: require('./assets/images/banner/007.jpeg'),
          color: [ "#1d1006", "rgba(29,16,6,0.9)", "#2f1a0a" ]
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
    });
    this.init()
  },
  methods: {
    switchAllSea () {
      this.bannerSwiperSlide = true;
      this.bgOpcaty = false
      this.$nextTick(() => {
        if (!this.swiper) {
          this.swiper = new Swiper('.swiper-container-box', {
            slidesPerView: 1.6,
            spaceBetween: 0,
            centeredSlides: true,
            initialSlide: this.curIndex,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              }
            },
            on: {
              slideChange: (e) => {
                this.curIndex = e.activeIndex
              }
            }
          })
        }
      })
    },
    switchOneSea () {
      this.bannerSwiperSlide = false;
    },

    clickFullscreen () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    init () {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },

    openBai () {
      var windowObjectReference;
      var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=true,status=true";
      windowObjectReference = window.open("https://www.baidu.com/", "B_page", strWindowFeatures);
      setTimeout(function () {
        //windowObjectReference.close(); // 我们页面中关闭 或进行其他操作 打开的 窗口页
        console.log(windowObjectReference.position); // 10s 后 在origin winodw 控制台 打印 B_page 视口对象中的position 成员
      }, 10000);
    }
  }
}
</script>

<style scoped>
.qm-full-screen {
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 10px;
  z-index: 100;
  cursor: pointer;
}
.qm-full-screen-a {
  position: fixed;
  top: 10px;
  right: 100px;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 10px;
  z-index: 100;
  cursor: pointer;
}
.qm-full-screen:hover {
  color: #fff;
}
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

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.4);
}
/* .qm-page-banner::-webkit-scrollbar {

} */
.qm-page-banner-min {
  transition: all 1s;
  height: 600px;
}
.qm-page-banner-max {
  width: 100%;
  left: 0;
  transition: all 1s;
  height: 660px;
}
.qm-banner-main {
  transition: all 1s;
}

.swiper-container-box .swiper-container {
  width: 100%;
  height: 100%;
  transition: all 1s;
}
.swiper-container-box .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.86);
  height: 440px;
}
.swiper-container-box .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-blend-mode: multiply;
}
.swiper-container-box .swiper-slide-active,
.swiper-container-box .swiper-slide-duplicate-active {
  transform: scale(1);
}
.qm-page-banner /deep/ .swiper-pagination-bullet {
  width: 28px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 12px;
  color: #fff;
  opacity: 1;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0;
  margin: 28px 0 0;
}

.qm-page-banner /deep/ .swiper-pagination-bullet-active {
  color: #fff;
  border: 1px solid #fff;
}
</style>