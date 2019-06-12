import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'user/login',///login/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function login2(data) {
    return request({
        url: '/login/index',
        method: 'post',
        data
    })
}