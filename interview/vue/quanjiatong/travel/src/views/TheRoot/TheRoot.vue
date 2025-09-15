<template>
    <div>
        <router-view/>
        <div class="footer h-12">
            <TabBar></TabBar>
        </div>
    </div>
</template>
<script setup lang="ts">
import TabBar from '@/views/layout/TabBar.vue'
import '@/style.css'

</script>
<style scoped>

</style>