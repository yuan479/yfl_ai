<template>
    <div>
       <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="coupon-o" to="/discount">折扣</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/trip">行程</van-tabbar-item>
        <van-tabbar-item icon="star-o" to="/collection">收藏</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
       </van-tabbar>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref<number>(0)
</script>
<style scoped>
</style>