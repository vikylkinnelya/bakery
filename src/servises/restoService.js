export default class RestoService {
    _apiBase = 'http://localhost:3000';
    _apiID = '1bae761a'
    _apiKey = 'd82fe35dc33c4ae1401d2e01d376b7ea'

    _restaurantID = '2579043580132464'


    async getResourse(url, type = '') {

        const expType = `/?type=${type}`

        const typeOf = type === 'all' ? '' : expType

        const res = await fetch(`${this._apiBase}${url}${typeOf}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, reseived ${res.status}`)
        }
        return res.json()
    }

    async getMenuItems(menuType = '') {

        return await this.getResourse(`/menus/`, menuType)
    }

}