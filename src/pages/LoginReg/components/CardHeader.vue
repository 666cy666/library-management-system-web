<template>
    <div class="card-header">
        <el-row>
            <el-col :offset="6" :span="12">
                <h1>图书管理系统</h1>
            </el-col>
            <el-col :offset="params.offset" :span="params.span">
                <h3 class="title">{{ title }}</h3>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['title'])
const params = computed(() => {
    if (props.title === '找回密码') {
        return {
            offset: 1,
            span: 5
        }
    } else {
        return {
            offset: 3,
            span: 3
        }
    }
})
</script>

<style scoped lang='scss'>
.title {
    margin-top: 10px;
}
</style>