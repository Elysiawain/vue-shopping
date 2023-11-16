import { getUserInfo, setUInfo } from '@/utils/local'
// 用户信息仓库
export default {
  namespaced: true, // 开启命名空间
  // 定义state，用于存储用户信息
  state: {
    userInfo: getUserInfo()
  },
  // 定义getters，用于获取state中的用户信息
  getters: {},
  // 定义mutations，用于更新state中的用户信息
  mutations: {
    setUserInfo (state, obj) {
      console.log(obj)
      state.userInfo.userId = obj.userId
      state.userInfo.token = obj.token
      setUInfo(obj)
    }
  },
  // 定义actions，用于处理用户信息
  actions: {}
}
