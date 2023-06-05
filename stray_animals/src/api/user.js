import axios from '../../axios'

// 用户登录
// 
export function userLogin(data) {
  return axios.post(`/login`, data)
}
// 用户注册
export function userSignup(data) {
  return axios.post(`/signup`, data)
}

// 修改密码
export function updatePassword(data) {
  return axios.post('/updatePassword', data)
}

// 获取用户信息
export function getUserInfo(username){
  return axios.get('/getUserInfo?username=' + username)
}
// 注销用户
export function deleteUserInfo(username){
    return axios.get('/deleteUser?username=' + username)
  }
  // 宠物领养，更新用户表和宠物表
export function adoptAnimal(username,animalname){
    return axios.get(`/adopt?username=${username}&animalname=${animalname}`)
  }