<template>
    <div>
        <!-- 路由出口 -->
        <router-view></router-view>
        <!-- 添加rotue后开启路由模式 -->
        <van-tabbar route class="tabbar-box" v-model="active" active-color="orange" inactive-color="#000">
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="apps-o">分类页</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/user" icon="user-circle-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  data () {
    return {
      active: ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>
