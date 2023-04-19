<template>
    <el-card class="login_card">
        <template #header>
            <CardHeader title="登录"></CardHeader>
        </template>
        <el-form label-width="60">
            <el-form-item label="用户名">
                <el-input clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="large" @click="Login">登录</el-button>
                <el-button type="info" size="large">重置</el-button>
            </el-form-item>

        </el-form>
        <div id="actions" class="flex"><router-link to="/register">去注册</router-link><router-link
                to="/findpsw">忘记密码</router-link>
        </div>
    </el-card>
</template>

<script setup>
import CardHeader from '../components/CardHeader.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const Login = () => {
    router.push('/home')
}
</script>

<style scoped lang='scss'>
#actions {
    justify-content: space-between;
    margin-top: 30px;

    a {
        color: rgb(51, 51, 51);

        &:hover {
            color: #409EFF;
        }
    }
}
</style>