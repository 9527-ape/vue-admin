<script setup>
import HeadMemu from './views/head/HeadMemu.vue'
import Footer from './views/footer/Footer.vue'
</script>

<template>
<div class="common-layout">
    <el-container>
      <el-header id="page_haeder" style="padding: 0px;height: auto;">
        <HeadMemu />
      </el-header>

      <el-main style="padding: 0px;">
        <!-- 路由触发页面 -->
        <router-view />
      </el-main>

      <el-divider style="margin:24px 20px,24px,20px;"/>
      <el-footer style="padding: 0px;">
        
        <Footer />
      </el-footer>
      <el-backtop :right="100" :bottom="100" />
    </el-container>
</div>
</template>