// 在此封装登录相关的请求接口
import request from '@/utils/request'
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.axios = axios

export const getPicCode = (/* 在此填写参数 */) => {
  return request.get('/captcha/image')// 一定要返回
}
