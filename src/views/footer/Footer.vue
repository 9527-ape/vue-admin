<template>
  <div style="padding-bottom: 30px;">
  <el-row>
    <el-col :span="8" :offset="8">
        <!-- <el-link type="info" href="https://element-plus.org">{{pci}}</el-link> -->
      <el-row justify="center" style="margin: 5px;">
          <el-link href="https://beian.miit.gov.cn/" :underline="false" >{{pci}}</el-link>
          <el-divider direction="vertical" />
          <el-link href="https://www.beian.gov.cn/portal/index.do" :underline="false" size="large">{{police}}</el-link>
      </el-row>
      <el-row justify="center" style="margin: 5px;">
        <el-text id="url" type="info" >{{name}}</el-text>
      </el-row>
  </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Copyright © 2023 javautil.cn'
      ,pci: '湘ICP备2021019165号'
      ,police:"公网安备43011102001899号"
    }
  }
}
</script>