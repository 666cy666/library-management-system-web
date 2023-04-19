<template>
    <div class="flex" id="home_header">
        <div class="icon ">
            <el-icon size="26px" v-show="!isCollapse" color="white">
                <Fold @click="changeMenuState"></Fold>
            </el-icon>
            <el-icon size="26px" v-show="isCollapse" color="white">
                <Expand @click="changeMenuState"></Expand>
            </el-icon>
        </div>
        <div class="info flex">
            <div>{{ timeStr }}</div>
            <div class="vertical_line"></div>
            <div>欢迎{{ 'admin' }}</div>
            <div class="vertical_line"></div>
            <el-button type="primary" :icon="SwitchButton" style="margin-right: 10px;" @click="loginOut">退出</el-button>
        </div>
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import mitt from '@/utils/Event'
import { SwitchButton, Fold, Expand } from '@element-plus/icons-vue'
import { useGetCurTime } from '@/hooks/time.js'

const { timeStr } = useGetCurTime()
const isCollapse = ref(false)
const changeMenuState = () => {
    isCollapse.value = !isCollapse.value
    mitt.emit('changeMenuState', isCollapse.value)
}

const router = useRouter()
const loginOut = () => {
    ElMessage({
        message: '退出成功！',
        type: 'success',
    })
    router.push('/login')
}

</script>

<style scoped lang='scss'>
#home_header {
    height: 50px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-color: #1264A7;

    .info {
        color: #fff;

        div {
            line-height: 32px;
        }
    }
}
</style>