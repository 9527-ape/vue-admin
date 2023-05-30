<template>
  <el-row>
    <el-col :span="8">
      <id id="footerUrl">

    </id>
  </el-col>
    <el-col :span="8">
      <id id="footerUrl">
        <!-- <el-link type="info" href="https://element-plus.org">{{pci}}</el-link> -->
        <el-text id="url" class="mx-1" type="info" size="large">{{pci}} {{name}}</el-text>
    </id>
  </el-col>
    <el-col :span="8">
      <id id="footerUrl">
        
    </id>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      name: '2021-2023 ©javautil.cn'
      ,pci: '湘ICP备2021019165号'
      //,name: '2023©javautil.cn'
    }
  }
}
// #footerUrl{
//   align: center
// }
</script>