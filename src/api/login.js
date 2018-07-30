import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/authcenter/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/authcenter/userinfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/authcenter/logout',
    method: 'post'
  })
}
