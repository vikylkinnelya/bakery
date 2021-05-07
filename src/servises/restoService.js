export default class RestoService {
    _apiBase = 'http://localhost:3000';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, reseived ${res.status}`)
        }
        return await res.json()
    }

    async getMenuItems(selector = '') {
        return await this.getResourse(`/menu/${selector}`)
    }

}