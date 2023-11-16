<template>
  <div>
    <!-- 导航条 -->
    <!-- <van-nav-bar title="智慧商城" /> -->

    <!-- 搜索框 -->
    <!-- <van-search v-model="value" shape="round" background="rgba(255,165,0,0.7)" placeholder="输入搜索关键词"
      @search="$router.push('/search')" /> -->
    <van-search v-model="value" show-action shape="round"
      placeholder="请输入搜索关键词" readonly @click="$router.push('/search')" background="rgba(255,165,0,0.7)">
      <template #action>
        <div @click="$router.push('/search')" class="search-button">搜索</div>
      </template>
    </van-search>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.imgUrl">
        <img :src="item.imgUrl" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item v-for="item in navList" :key="item.imgUrl" :icon="item.imgUrl" text="新品首发"
        @click="$router.push('/category')" />
    </van-grid>

    <!-- 主会场 -->
    <div class="main">
      <img src="@/assets/main.png" alt="">
    </div>

    <!-- 猜你喜欢 -->
    <div class="guess">
      <p class="guess-title">—— 猜你喜欢 ——</p>

      <div class="goods-list">
        <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeData } from '@/api/home.js'
import GoodsItem from '@/components/GoodsItem.vue'
export default {
  name: 'HomePage',
  data () {
    return {
      value: '',
      bannerList: [], // banner图数据
      navList: [], // 导航
      proList: [] // 商品
    }
  },
  async created () {
    // 发送首页数据请求
    const { data: { pageData } } = await getHomeData()
    this.bannerList = pageData.items[1].data
    this.navList = pageData.items[3].data
    this.proList = pageData.items[6].data
  },
  components: {
    GoodsItem
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar__title {
  color: orange;
}

// 主题 padding
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

// 导航条样式定制
.van-nav-bar {
  z-index: 999;
  color: orange;
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

// 搜索框样式定制
.van-search {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 999;
}
.search-button{
  color: white;
}
// 分类导航部分
.my-swipe{
  margin-top: 54px;
}
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: orange;
}

// 商品样式
.goods-list {
  // background-color: rgba(255,165,0,0.5);
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  align-content: center;
  background-color: rgba(180, 174, 174, 0.2);
  padding: 10px;
}
</style>
