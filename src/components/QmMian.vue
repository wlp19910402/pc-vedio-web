<template>
  <div class="qm-main">
    <el-row :gutter="10" justify="space-around">
      <el-col :span="24">
        <img class="qm-banner-theme" alt="game of thrones logo" src="../assets/images/theme.png" />
        <div class="qm-score-text ">
          <span style="font-weight:bold"> 98% Match </span><span style="color:rgba(255,255,255,0.8)"> 2011-2019
          </span>
          <el-button style="background: transparent; padding:4px; opacity:0.8" size="mini" plain disabled>18+
          </el-button>
        </div>
        <div class="qm-button-group">
          <el-button type="danger" icon="el-icon-caret-right">Resume</el-button>
          <el-button type="danger" plain style=""><i class="el-icon-plus "></i>
            My List</el-button>
        </div>
        <div class="qm-banner-page" @click="switchAllSea">
          <span>Season 7</span> <span style="">All SeaSon</span>
        </div>
        <div class="swiper-container swiper-container-gif">
          <div class="swiper-wrapper">
            <div v-for="(item,index) in gitBool " @mouseenter="switchGifEnter(index)"
              @mouseleave="switchGifLeave(index)" :key="index" class="swiper-slide">
              <img v-show="!gitBool[index]" :src="gifStopArr[index]" />
              <img v-show="gitBool[index]" :src="gifArr[index]">
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="16">
        <div class="qm-banner-page">
          Overview
        </div>
        <div class="qm-text">
          It is well on its way to besting that record this year, with 10 awards already bagged in lesser
          categories at last week's Creative Arts Emmys, including for the show's blockbuster special effects
          and mock-medieval swords-and-bodices costumes.
        </div>
      </el-col>
      <el-col :span="8">
        <div class="qm-banner-page">
          Genres
        </div>
        <div class="qm-text">
          It is the overwhelming favorite to add the top drama series prize to its haul on Sunday.
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <div class="qm-banner-page">Cast</div>
        <div class="swiper-container swiper-container-user-header">
          <div class="swiper-wrapper">
            <div v-for="(item,index) in userArr " :key="index" class="swiper-slide">
              <el-row :gutter="20">
                <el-col :span="7" :offset="1">
                  <div class="qm-user-header">
                    <img :src="item.url" />
                  </div>
                </el-col>
                <el-col :span="16">
                  <div class="qm-user-name">{{item.username}}</div>
                  <div class="qm-user-desc">{{item.desc}}</div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="qm-banner-page">Popular no Netiflix</div>
        <div class="swiper-container swiper-container-bottom">
          <div class="swiper-wrapper">
            <div v-for="(item,index) in gifStopArr " :key="index" class="swiper-slide">
              <img :src="item" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>

import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([ Navigation, Pagination ]);
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
export default {
  name: 'QmHeader',
  props: {
    switchAllSea: {
      type: Function,
      default: () => { }
    }
  },
  data () {
    return {
      gifArr: [
        require('../assets/images/vedio/001.gif'),
        require('../assets/images/vedio/002.gif'),
        require('../assets/images/vedio/003.gif'),
        require('../assets/images/vedio/004.gif'),
        require('../assets/images/vedio/005.gif'),
        require('../assets/images/vedio/001.gif'),
        require('../assets/images/vedio/002.gif'),
      ],
      gifStopArr: [
        require('../assets/images/vedioImages/001.jpg'),
        require('../assets/images/vedioImages/002.jpg'),
        require('../assets/images/vedioImages/003.jpg'),
        require('../assets/images/vedioImages/004.jpg'),
        require('../assets/images/vedioImages/005.jpg'),
        require('../assets/images/vedioImages/002.jpg'),
        require('../assets/images/vedioImages/003.jpg'),
      ],
      gitBool: [
        false, false, false, false, false, false, false
      ],
      userArr: [
        {
          url: require('../assets/images/user/001.jpeg'),
          username: "Peter Dinkiage",
          desc: "Tytion Lannister"
        },
        {
          url: require('../assets/images/user/002.jpeg'),
          username: "Peter Dinkiage",
          desc: "Tytion Lannister"
        },
        {
          url: require('../assets/images/user/003.jpeg'),
          username: "Peter Dinkiage",
          desc: "Tytion Lannister"
        },
        {
          url: require('../assets/images/user/004.jpeg'),
          username: "Peter Dinkiage",
          desc: "Tytion Lannister"
        },
        {
          url: require('../assets/images/user/005.jpeg'),
          username: "Peter Dinkiage",
          desc: "Tytion Lannister"
        },
        {
          url: require('../assets/images/user/006.jpeg'),
          username: "Peter Dinkiage",
          desc: "Tytion Lannister"
        },
        {
          url: require('../assets/images/user/007.jpeg'),
          username: "Peter Dinkiage",
          desc: "Tytion Lannister"
        }
      ]
    }
  },
  mounted () {
    new Swiper('.swiper-container-gif', {
      slidesPerView: "auto",
      spaceBetween: 30,
    })
    new Swiper('.swiper-container-user-header', {
      slidesPerView: "auto",
      spaceBetween: 30,
    })
    new Swiper('.swiper-container-bottom', {
      slidesPerView: "auto",
      spaceBetween: 40,
    })
  },
  methods: {
    switchGifEnter (index) {
      this.$nextTick(() => {
        this.gitBool[ index ] = true
        this.gitBool = [ ...this.gitBool ]
      })
    },
    switchGifLeave (index) {
      this.$nextTick(() => {
        this.gitBool[ index ] = false
        this.gitBool = [ ...this.gitBool ]
      })
    }
  },
}
</script>

<style scoped>
.qm-banner-theme {
  width: 350px;
}
.qm-score-text {
  line-height: 60px;
  color: #fff;
  font-size: 12px;
}
.app /deep/ .qm-banner-main {
  padding-top: 100px;
}

.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}
.qm-button-group /deep/ .el-button {
  width: 140px;
  transition: all 0.5s;
}
.qm-button-group /deep/ .el-button:first-child:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}
.qm-button-group /deep/ .el-button:last-child {
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  transition: all 0.5s;
}
.qm-button-group /deep/ .el-button:last-child:hover {
  background: #fff;
  transform: scale(1.1);
  color: #323333;
}
.qm-banner-page {
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
.qm-banner-page span:last-child {
  opacity: 0.8;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 20px;
  font-weight: normal;
}
.qm-banner-page span:last-child:hover {
  opacity: 1;
}

.swiper-container {
  width: 100%;
  height: 140px;
  padding: 20px 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
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
  transform: scale(1);
  transition: all 0.5s;
  width: 240px;
  overflow: hidden;
  background: transparent;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-blend-mode: multiply;
}
.swiper-slide:hover {
  transform: scale(1.2);
  cursor: pointer;
  animation-play-state: paused;
  transition: all 0.5s;
}

.qm-text {
  color: #ffffff;
  font-size: 12px;
  opacity: 0.7;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px 0;
}
.qm-text:hover {
  opacity: 1;
  transition: all 0.5s;
}
.swiper-container-user-header {
  width: 100%;
  height: 120px;
  background: transparent;
}

.swiper-container-user-header .swiper-slide {
  background: transparent;
}
.swiper-container-user-header .swiper-slide:hover {
  transform: scale(1);
  cursor: pointer;
  transition: all 0.5s;
}
.swiper-container-user-header .swiper-slide img {
  transition: all 0.5s;
  transform: scale(1);
  border-radius: 50%;
}
.swiper-container-user-header .swiper-slide:hover img {
  transform: scale(1.2);
  transition: all 0.5s;
}
.swiper-container-user-header .swiper-slide:hover .qm-user-desc {
  opacity: 1;
  transition: all 0.5s;
}
.qm-user-name {
  font-size: 14px;
  color: #ffffff;
  text-align: left;
}
.qm-user-desc {
  margin-top: 10px;
  font-size: 12px;
  color: #ffffff;
  opacity: 0.6;
  transition: all 0.5s;
  text-align: left;
}
.swiper-container-bottom {
  margin-top: 20px;
  width: 100%;
  height: 320px;
  background: transparent;
}
.swiper-container-bottom .swiper-slide {
  width: 200px;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.5s;
  background: transparent;
}
.swiper-container-bottom .swiper-slide:hover {
  transform: scale(1.2);
  transition: all 0.5s;
}
</style>
