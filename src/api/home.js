// 封装首页数据请求
import request from '@/utils/request'
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.axios = axios

export const getHomeData = () => {
  return request.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
