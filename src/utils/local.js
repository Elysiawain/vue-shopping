// 封装本地存储的方法
const USER_INFO_KEY = 'twj_userInfo'
export const setUInfo = (userInfo) => {
  // 在设置的时候需要序列化
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}
// 获取信息
export const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO_KEY)
  const defaultUserInfo = { token: '', userId: '' }
  return userInfo ? JSON.parse(userInfo) : defaultUserInfo
}
export const removeUserInfo = () => {
  return localStorage.removeItem(USER_INFO_KEY)
}
