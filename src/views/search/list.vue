<template>
  <div>
    <div class="search-box">
      <van-nav-bar title="商品列表" left-arrow @click-left="$router.back()" />

      <van-search show-action readonly shape="round" placeholder="请输入搜索关键词" :value="searchName || 搜索商品"
        @click="$router.push('/search')">
        <template #action>
          <van-icon class="tool" name="apps-o" @click="classify" />
        </template>
      </van-search>

      <!-- 排序选项按钮 -->
      <div class="sort-btns">
        <div class="sort-item">综合</div>
        <div class="sort-item">销量</div>
        <div class="sort-item">价格 </div>
      </div>
    </div>
    <!-- 渲染商品列表 -->
    <div v-if="proList.length>0" class="goods-list">
      <goods-item v-for="item in proList" :key="item.goods_id" :item="item"></goods-item>
    </div>
    <div v-else>
      <van-empty image="search" description="暂无商品" />
    </div>
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
    </van-pull-refresh>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProList } from '@/api/product'
import { Notify, Toast } from 'vant'

export default {
  name: 'SerachList',
  data () {
    return {
      searchName: this.$route.query.searchName,
      proList: [], // 商品列表数据
      page: 1,
      isLoading: false
    }
  },
  async created () {
    // 发送获取商品列表请求
    const { data: { list } } = await getProList({
      goodsName: this.searchName,
      page: this.page
    })
    this.proList = list.data
  },

  methods: {
    classify () {
      Notify({ message: '分类功能暂未开放', duration: 3000, background: 'orange' })
    },
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="less" >
.search-box {
  .van-nav-bar__content {
    background-color: rgba(255, 165, 0, 0.7);
  }

  .search-button {
    color: orange;
  }

  .van-nav-bar__title {
    color: white;
  }

  .van-nav-bar__arrow {
    color: white;
  }

  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;

    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
      cursor: pointer;
    }
  }
}

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
