<template>
    <div id="img-box">
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="item in arrayList" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>

        <!-- <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" /> -->

        <!-- <el-image style="height: calc(100vh);width: calc(250vh);" :src="url" :fit="item" /> -->
        <!-- <el-image v-for="url in urls" :key="url" :src="url" lazy /> -->
      </el-carousel-item>
    </el-carousel>
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              arrayList:['一','二','三','四','五'],
              // urls:[
              //       // 'https://view.lixingyong.com/images/2021/01/31/5b789365be_1044.jpg',
              //       'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
              //     ]
          }
      }
  }
  </script>

  <style>
  /* #img-box{
    height: calc(100vh);
  } */

  /* 动态满屏 */
  .el-carousel__container{
    height: calc(100vh);
  }
  .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    /* background-image: 'http://view.lixingyong.com/image/PbUFf'; */
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>