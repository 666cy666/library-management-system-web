<template>
    <div class="home_page flex">
        <aside>
            <Menu />
        </aside>
        <section>
            <HomeHeader></HomeHeader>
            <div class="view flex">
                <el-card>
                    <router-view></router-view>
                </el-card>
            </div>
        </section>
    </div>
</template>

<script setup>
import Menu from './components/Menu.vue';
import HomeHeader from './components/HomeHeader.vue';
</script>

<style scoped lang='scss'>
.home_page {
    height: 100vh;

    aside {
        height: 100%;
    }

    section {
        flex-grow: 1;

        .view {
            height: calc(100% - 50px);
            justify-content: center;
            align-items: center;
            background-color: #eee;

            .el-card {
                width: 95%;
                height: 90%;
            }
        }
    }
}
</style>