<script setup>
import HeadMemu from './components/views/head/HeadMemu.vue'
import HeadImg from './components/views/head/HeadImg.vue'
// import HeadList from './components/views/head/HeadList.vue'
import Footer from './components/views/footer/Footer.vue'
import PageMain from './components/views/main/PageMain.vue'
// import { proxyRefs } from 'vue'
</script>

<template>
<div class="common-layout">
    <el-container>
      <!-- <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark" /></el-col>
  </el-row> -->
      <el-header id="page_haeder" style="padding: 0px;height: auto;">
        <!-- <HeadList /> -->
        <HeadMemu />
      </el-header>

      <el-main style="padding: 0px;">
        <HeadImg />
        <PageMain/>
      </el-main>

      <el-footer style="padding: 0px;">
        <Footer />
      </el-footer>
    </el-container>
</div>
</template>