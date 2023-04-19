<template>
    <el-menu active-text-color="#fff" background-color="#0F2E52" class="el-menu-vertical-demo" default-active="1"
        :collapse="isCollapse" text-color="#fff" style="height: 100%;">
        <el-menu-item index="1">
            <el-icon>
                <HomeFilled />
            </el-icon>
            <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon>
                <Menu />
            </el-icon>
            <template #title>Navigator Two</template>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { HomeFilled, Menu } from '@element-plus/icons-vue'
import mitt from '@/utils/Event';
const isCollapse = ref(false)
onMounted(() => {
    mitt.on('changeMenuState', (value) => {
        isCollapse.value = value
    })
})

onUnmounted(() => {
    mitt.off('changeNavState')
})
</script>

<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

.el-menu-item.is-active {
    background-color: #146FBA;
}
</style>