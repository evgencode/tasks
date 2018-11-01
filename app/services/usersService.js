import ApiService from './ApiService'

export default class UsersService extends ApiService {
  async getUsers() {
    const response = await this.fetch({
      url: `/users`
    })
    return response
  }
}
