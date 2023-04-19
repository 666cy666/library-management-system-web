<template>
    <div class="log_reg_page flex bgcolor">
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style scoped lang='scss'>
.log_reg_page {
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .el-card {
        min-width: 300px;
        min-height: 265px;
        width: 30%;

    }
}
</style>