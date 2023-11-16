<template>
    <div v-if="item.goods_id" class="goods-item" @click="$router.push(`/prodetail/${item.goods_id}`)">
        <!-- 跳转时携带商品的id -->
        <div class="left">
            <img :src="item.goods_image" alt="" />
        </div>
        <div class="right">
            <p class="tit text-ellipsis-2">
                {{ item.goods_name }}
            </p>
            <p class="count">已售 {{ item.goods_sales }} 件</p>
            <p class="price">
                <span class="new">¥{{ item.goods_price_min }}</span>
                <span class="old">¥{{ item.goods_price_max }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    item: { // 父元素中传递的数据
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    // justify-content: space-between;
    position: relative;
    margin-bottom: 6px;
    padding: 5px;
    background-color: #fff;
    width: 48%;
    border-radius: 4%;
    .left {
        width: 100%;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            display: block;
            margin: 0 auto;
        }

        .img-hover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            display: none;
        }
    }

    .right {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        font-size: 14px;
        justify-content: flex-start;
        align-content: space-between;
        line-height: 1.3;
        padding: 10px;

        .count {
            color: #999;
            font-size: 12px;
        }

        .text-ellipsis-2{
            font-size: 14px;
        }
        .price {
            color: #999;
            font-size: 16px;

            .new {
                color: #f03c3c;
                margin-right: 10px;
            }

            .old {
                text-decoration: line-through;
                font-size: 12px;
            }
        }
    }

    .left img:hover+.img-hover {
        display: block;
    }
}
</style>
