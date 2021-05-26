export default class RestoService {
    _apiBase = 'http://localhost:3000';
    _apiID = '1bae761a'
    _apiKey = 'd82fe35dc33c4ae1401d2e01d376b7ea'

    _restaurantID = '2579043580132464'


    async getResourse(url, type = '', page = 1,) {


        const typeOf = type === 'all' ? '' : `?type=${type}&`
        const pageOf = page === '' ? '' : `page=${page}&_limit=8`
        const joiner = type === '' ? '' : '?'

        const res = await fetch(`${this._apiBase}${url}${joiner}${typeOf}${pageOf}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, reseived ${res.status}`)
        }
        return res.json()
    }

    async getMenuItems(menuType = '', menuPage = '') {
        return await this.getResourse(`/menus`, menuType, menuPage)
    }

    async getOrderNumber() {
        const res = await this.getResourse('/orders/');
        const orderNumber = res.length + 1
        return orderNumber
    }

}