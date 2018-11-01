import qs from 'query-string'

export default class ApiService {
  constructor() {
    this.options = {
      credentials: 'include',
      mode: 'cors',
      method: 'GET',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    this.baseUrl = 'http://jsonplaceholder.typicode.com'
  }

  fetch({ url = '', options = {}, query = {} }) {
    const q = qs.stringify(query)
    const q$ = q ? `?${q}` : ''
    const url$ = `${this.baseUrl}${url}${q$}`

    return fetch(url$, {
      ...this.options,
      ...options
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => {
            throw err
          })
        }
        return res.json()
      })
      .then(data => data)
  }
}
