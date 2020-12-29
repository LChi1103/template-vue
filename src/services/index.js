import BaseService from './base-service'

const login = (request) => { return BaseService.post('login', request) } // 登陆

export default {
  login
}
