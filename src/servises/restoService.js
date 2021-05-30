export default class RestoService {
    _apiBase = 'http://localhost:3000';
    _apiID = '1bae761a'
    _apiKey = 'd82fe35dc33c4ae1401d2e01d376b7ea'

    _restaurantID = '2579043580132464'


    async getResourse(url, type = '', page = 1,) {

        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, reseived ${res.status}`)
        }
        return res.json()
    }

    async getMenuItems(menuType = '', menuPage = 1) {

        const typeOf = menuType === 'all' ? '' : `type=${menuType}&`
        const pageOf = menuPage === '' ? '' : `_page=${menuPage}&_limit=8`
        const joiner = menuType === '' ? '' : '?'

        return await this.getResourse(`/menus/${joiner}${typeOf}${pageOf}`)
    }

    async getOrderNumber() {
        const res = await this.getResourse('/orders/');
        const orderNumber = res.length + 1
        return orderNumber
    }

    async setOrder(order, data) {
        const number = await this.getOrderNumber(); //узнаем номер заказа по порядку
        const newOrder = { //заказ состоит из
            id: number, //номера по порядку
            order: order, //данных, получ из items
            customer: data
        }
        const response = await fetch(`${this._apiBase}/orders`, { //запрос к orders в json файле
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });
        if (!response.ok) {
            throw new Error('json error');
        }
    }

    async setSubscriber(subscriber) {
        const response = await fetch(`${this._apiBase}/subscribers`, { //запрос к orders в json файле
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(subscriber)
        });
        if (!response.ok) {
            throw new Error('json error');
        } 
    }

}