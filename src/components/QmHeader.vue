<template>
  <div class="qm-header">
    <el-row :gutter="10">
      <el-col :span="9" :offset="1">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="transparent" text-color="rgba(255,255,255,0.6)" active-text-color="#ffffff">
          <el-menu-item index="1">home</el-menu-item>
          <el-submenu index="2">
            <template slot="title">TV Shows</template>
            <el-menu-item index="2-1">shows 001</el-menu-item>
            <el-menu-item index="2-2">shows 002</el-menu-item>
            <el-menu-item index="2-3">shows 003</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">Movies</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <img class="header-logo" width="72px" alt="netflix logo" src="../assets/images/logo.png">
      </el-col>
      <el-col :span="10" style="text-align:right;">
        <el-menu style="float:right" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="transparent" text-color="rgba(255,255,255,0.8)" active-text-color="#ffffff">
          <el-menu-item index="4"> <i class="el-icon-search"></i></el-menu-item>
          <el-menu-item index="5"> <i class="el-icon-message-solid"></i></el-menu-item>
          <el-menu-item index="6">Movies</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'QmHeader',
  data () {
    return { activeIndex: '1' }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped>
.qm-header {
  width: 100%;
}
.qm-header /deep/ .el-menu.el-menu--horizontal {
  border-bottom: none;
}
.qm-header /deep/ .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.qm-header /deep/ .el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}
.header-logo {
  width: 72px;
  justify-items: center;
  padding-top: 10px;
  text-align: center;
  display: block;
  margin: 0 auto;
}
.qm-header /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title:hover,
.el-menu-item:hover {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4) !important;
}
</style>
