import ApiService from './ApiService'

export default class TodosService extends ApiService {
  async getTodos() {
    return await this.fetch({
      url: `/todos`
    })
  }
}
