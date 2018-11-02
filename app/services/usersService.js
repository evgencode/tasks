import ApiService from './ApiService'

export default class UsersService extends ApiService {
  async getUsers() {
    return await this.fetch({
      url: `/users`
    })
  }
}
