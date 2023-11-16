<template>
  <div class="product-detail">
    <!-- 商品详情页 -->
    <!-- <van-nav-bar fixed title="商品详情页" left-arrow @click-left="$router.back()" /> -->
    <!-- 加载轮播图 -->
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.external_url" />
      </van-swipe-item>
      <!-- 下脚数字提示 -->
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }} / {{ images.length }}</div>
      </template>
    </van-swipe>
    <!-- 商品说明 -->
    <div class="info">
      <div class="title">
        <div class="price">
          <span class="now">￥{{ detail.goods_price_min }}</span>
          <span class="oldprice">￥{{ detail.goods_price_max }}</span>
        </div>
        <div class="sellcount">已售 {{ detail.goods_sales }} 件</div>
      </div>
      <div class="msg text-ellipsis-2">
        {{ detail.goods_name }}
      </div>

      <div class="service">
        <div class="left-words">
          <span><van-icon name="passed" />七天无理由退货</span>
          <span><van-icon name="passed" />48小时发货</span>
        </div>
        <div class="right-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>

    <!-- 商品评价 -->
    <div class="comment">
      <div class="comment-title">
        <div class="left"  @click="noWorlks">商品评价 ({{ total }}条)</div>
        <div class="right" @click="noWorlks">查看更多 <van-icon name="arrow" /> </div>
      </div>
      <div class="comment-list">
        <div class="comment-item" v-for="item in commentList" :key="item.comment_id">
          <div class="top">
            <img :src="item.user.avatar_url || defaultImg" alt="">
            <div class="name">{{ item.user.nick_name }}</div>
            <van-rate :size="16" :value="item.score / 2" color="#ffd21e" void-icon="star" void-color="#eee" />
          </div>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="time">
            {{ item.create_time }}
          </div>
        </div>
      </div>
    </div>
    <!-- 商品描述 -->
    <div class="desc" v-html="detail.content">
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div @click="$router.push('/')" class="icon-home">
        <van-icon name="wap-home-o" />
        <span>首页</span>
      </div>
      <div @click="$router.push('/cart')" class="icon-cart">
        <span v-if="cartTotal > 0" class="num">{{ cartTotal }}</span>
        <van-icon name="shopping-cart-o" />
        <span>购物车</span>
      </div>
      <div @click="addFn" class="btn-add">加入购物车</div>
      <div @click="buyNow" class="btn-buy">立刻购买</div>
    </div>
  </div>
</template>

<script>
import { getProDetail, getProComments } from '@/api/product'
import defaultImg from '@/assets/default-avatar.png'
import { Notify } from 'vant'
export default {
  name: 'ProdetailIndex',
  data () {
    return {
      id: this.$route.params.id, // 获取路由中的参数
      images: [], // 商品图片
      current: 0,
      detail: [],
      commentList: [], // 商品列表
      total: 0, // 商品评价
      defaultImg,
      cartTotal: 0,
      show: false,
      mode: '',
      sku: {},
      goods: {}
    }
  },
  created () {
    this.getDatail()
    this.getComments()
  },
  methods: {
    async getDatail () {
      // 获取商品详情页数据
      const { data: { detail } } = await getProDetail(this.id)
      this.images = detail.goods_images
      this.detail = detail
      this.goods = detail
    },
    async getComments () {
      const { data: { list, total } } = await getProComments(this.id, 4)
      this.commentList = list
      this.total = total
    },
    onChange (index) { },
    addFn () {
      this.mode = '加入购物车'
      this.show = true
      Notify({
        message: '功能待开发',
        background: 'orange',
        duration: 2000
      })
    },
    buyNow () {
      this.mode = '立即购买'
      this.show = true
      Notify({
        message: '功能待开发',
        background: 'orange',
        duration: 2000
      })
    },
    noWorlks () {
      Notify({
        message: '功能待开发',
        background: 'orange',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="less" scoped>
.product-detail {

  // nav导航
  ::v-deep .van-nav-bar__content {
    background-color: rgba(255, 165, 0, 0.7);

    .van-nav-bar__title {
      color: white;
    }

    .van-nav-bar__arrow {
      color: white;
    }
  }

  ::v-deep .van-swipe {
    margin-top: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  .custom-indicator {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 5px 10px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  }

  .info {
    padding: 10px;

  }

  .title {
    display: flex;
    justify-content: space-between;

    .now {
      color: #fa2209;
      font-size: 20px;
    }

    .oldprice {
      color: #959595;
      font-size: 16px;
      text-decoration: line-through;
      margin-left: 5px;
    }

    .sellcount {
      color: #959595;
      font-size: 16px;
      position: relative;
      top: 4px;
    }
  }

  .msg {
    display: flex;
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
    white-space: normal;
  }

  .service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #fafafa;

    .left-words {
      span {
        margin-right: 10px;
      }

      .van-icon {
        margin-right: 4px;
        color: #fa2209;
      }
    }
  }
}

.comment {
  padding: 10px;
}

.comment-title {
  display: flex;
  justify-content: space-between;

  .right {
    color: #959595;
  }
}

.comment-item {
  font-size: 16px;
  line-height: 30px;

  .top {
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 20px;

    img {
      width: 20px;
      height: 20px;
    }

    .name {
      margin: 0 10px;
    }
  }

  .time {
    color: #999;
  }
}

.desc {
  width: 100%;
  overflow: scroll;

  ::v-deep img {
    display: block;
    width: 100% !important;
  }
}

// 脚部
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .icon-home,
  .icon-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    .van-icon {
      font-size: 24px;
    }
  }

  .btn-add,
  .btn-buy {
    height: 36px;
    line-height: 36px;
    width: 120px;
    border-radius: 18px;
    background-color: #ffa900;
    text-align: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }

  .btn-buy {
    background-color: #fe5630;
  }
}
</style>
