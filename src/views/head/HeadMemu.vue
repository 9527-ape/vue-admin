<template>
    <el-affix>
        <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router
  >
    <el-menu-item >程序缘</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">主页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>动态</template>
      <el-menu-item index="2-1">科技one</el-menu-item>
      <el-menu-item index="2-2">科技two</el-menu-item>
      <el-menu-item index="2-3">科技three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>科技four</template>
        <el-menu-item index="2-4-1">狠活one</el-menu-item>
        <el-menu-item index="2-4-2">狠活two</el-menu-item>
        <el-menu-item index="2-4-3">狠活three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">学习专区</el-menu-item>
    <el-menu-item index="4">友情链接</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
  </el-affix>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>