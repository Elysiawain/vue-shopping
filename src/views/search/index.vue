<template>
  <div>
    <div class="searchBox">
      <van-nav-bar title="搜索页" left-arrow @click-left="$router.back()" />

      <van-search v-model="value" show-action shape="round" placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div class="search-button" @click="onSearch">搜索</div>
        </template>
      </van-search>
      <!-- 最近搜索 -->
      <div v-if="history.length > 0">
        <div class="nearSerach">
          <span>最近搜索</span>
          <van-icon name="delete-o" @click="clearHistory" class="delete-button"/>
        </div>
        <div class="search-list">
          <ul>
            <li v-for="item in history" :key="item" @click="refreshHistory(item)">
              <span> {{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'SearchIndex',
  data () {
    return {
      value: '',
      history: []
    }
  },
  created () {
    // 获取历史搜索记录
    this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
  },
  methods: {
    clearHistory () {
      this.history = []
      // 清除本地存储
      localStorage.removeItem('history')
    },
    onSearch () {
      // 判断当前搜索是否已经在最近搜索中存在
      if (this.history.indexOf(this.value) === -1) {
        // 不存在
        this.$router.push(`/searchlist?searchName=${this.value}`)// 跳转路由
        this.history.unshift(this.value)// 添加到最近搜索
        localStorage.setItem('history', JSON.stringify(this.history))
      } else {
        // 存在
        // 根据item删除原本改数据在数组中的数据
        this.history.splice(this.history.indexOf(this.value), 1)
        // 点击最近搜索后将点击的搜索顺序提前到首位
        this.history.unshift(this.value)
        // 更新本地数据存储
        localStorage.setItem('history', JSON.stringify(this.history))
        this.$router.push(`/searchlist?searchName=${this.value}`)// 跳转路由
      }
    },
    refreshHistory (item) {
      // 根据item删除原本改数据在数组中的数据
      this.history.splice(this.history.indexOf(item), 1)
      // 点击最近搜索后将点击的搜索顺序提前到首位
      this.history.unshift(item)
      // 更新本地数据存储
      localStorage.setItem('history', JSON.stringify(this.history))
      // 跳转路由
      this.$router.push(`/searchlist?searchName=${item}`)
    }
  }
}
</script>

<style lang="less">
.searchBox {
  .van-nav-bar__content {
    background-color: rgba(255, 165, 0, 0.7);
  }

  .search-button {
    color: orange;
  }

  .van-nav-bar__title {
    color: white;
  }
  .van-nav-bar__arrow{
    color: white;
  }
}

.nearSerach {
  display: flex;
  margin-top: 20px;
  font-size: 14px;
  background-color: #fff;
  color: gray;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 20px;
}
.delete-button{
  font-size: 16px;
}

.search-list {
  display: flex;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 4%;
  }

  ul li {
    margin: 5px;
    padding: 3px;
    background-color: rgba(128, 128, 128, 0.2);
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
