import axios from '../../axios'

// 用户登录
// 
export function adminLogin(data) {
  return axios.post(`/admin`, data)
}
// 管理--普通用户信息获取
export function getUser_info() {
  return axios.get(`/user_info`)
}
// // 管理--宠物信息获取
// export function getAnimal_info() {
//   return axios.post(`/animal_info`)
// }
// // 管理--新闻信息获取
// export function getNews_info() {
//   return axios.post(`/news_info`)
// }
// 管理--公告信息获取
export function getContent_info() {
  return axios.get(`/notice_info`)
}
// 管理--新闻信息text修改
export function manageNews_info(data) {
  return axios.post(`/updatenews`,data)
}

export function manageAnimal_info(data) {
  return axios.post(`/updateanimal`,data)
}
export function manageNotice_info(data) {
  return axios.post(`/updatenotice`,data)
}