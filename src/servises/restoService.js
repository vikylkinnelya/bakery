import db from '../components/firebase'

export default class RestoService {
    _apiBase = 'http://localhost:3000';
    //_apiBase = 'https://my-json-server.typicode.com/vikylkinnelya/bakery';
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

    async getMenuItems(menuType = '', menuPage = 1, limit = 8) {

        const typeOf = menuType === 'all' ? '' : `type=${menuType}&`
        const pageOf = menuPage === '' ? '' : `_page=${menuPage}&_limit=${limit}`
        const joiner = menuType === '' ? '' : '?'

        return await this.getResourse(`/menus/${joiner}${typeOf}${pageOf}`)
    }

    async getOrderNumber(resourse) {
        const res = await this.getResourse(`/${resourse}/`);
        const orderNumber = res.length + 1
        return orderNumber
    }

    async setOrder(order, data) {
        const numberOfOrder = await this.getOrderNumber('orders'); //узнаем номер заказа по порядку
        const newOrder = { //заказ состоит из
            id: numberOfOrder, //номера по порядку
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
            body: JSON.stringify(subscriber) //в массив просто записывается емэйл подписчика, айди добавляется автоматически
        });
        if (!response.ok) {
            throw new Error('json error');
        }
    }

    async setFeedback(feedback) {
        const numberOfFeedback = await this.getOrderNumber('feedback'); //узнаем номер заказа по порядку
        const response = await fetch(`${this._apiBase}/feedback`, { //запрос к orders в json файле
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(feedback)
        });
        if (!response.ok) {
            throw new Error('json error');
        }
    }


    async fetchMenuAll(menuType, lastVisible = 0) {
        const response = db.collection('products')
        /* .where('type', 'in', ['breakfast', 'bakery', 'drinks'])
        .orderBy('type')
        .startAfter(lastVisible)
        .limit(12) */
        const data = await response.get()
        return data.docs
    }

    async fetchMenuType(menuType) {
        const productRef = db.collection('products')
        const response = productRef.where("type", "==", menuType);
        const data = await response.get()
        return data.docs
    }






    async addBreakfast() {
        const productRef = db.collection('products')
        await productRef.doc('b1hcc').set({
            name: "Ham & Cheese Croissant",
            description: "Ham, Swiss cheese, lettuce, tomato and a butter spread on a croissant.",
            categhory: 1,
            type: 'breakfast',
            pricing: [4.95],
        }, { merge: true })
        await productRef.doc('b3ssc').set({
            name: "Smoked Salmon Croissant",
            description: "Smoked salmon, lettuce, tomato and lemon spread on a croissant.",
            categhory: 1,
            type: 'breakfast',
            pricing: [5.45]
        }, { merge: true })
        await productRef.doc('b2hescc').set({
            name: "Ham, Egg & Swiss Cheese Croissant",
            description: "Ham, scrambled egg and Swiss cheese on a croissant.",
            categhory: 1,
            type: 'breakfast',
            pricing: [5.65]
        }, { merge: true })
        await productRef.doc('b4sd').set({
            name: "Sandwich Dieppois",
            description: "A generous filling of tuna mayonnaise with tomato, cucumber and lettuce in a freshly made bread.",
            categhory: 1,
            type: 'breakfast',
            pricing: [4.45]
        }, { merge: true })
        await productRef.doc('b3hecb').set({
            name: "Ham, Egg & Cheese Baguette",
            description: "Ham, scrambled egg and Swiss cheese on a baguettine.",
            categhory: 1,
            type: 'breakfast',
            pricing: [6.65]
        }, { merge: true })
        await productRef.doc('b5sm').set({
            name: "Sandwich Montagnard",
            description: "Dry-cured Coppa ham, Comté cheese, tomatoes, olive tapenade and salad leaves in a freshly baked poppy seed bread.",
            categhory: 1,
            type: 'breakfast',
            pricing: [4.45]
        }, { merge: true })
        await productRef.doc('b11hfbj').set({
            name: "Half Flute, Butter & Jam",
            description: "Half Baguette served with butter and Jam",
            categhory: 1,
            type: 'breakfast',
            pricing: [2.95]
        }, { merge: true })
        await productRef.doc('b6ql').set({
            name: "Quiche Lorraine",
            description: "Paris ham, bacon, Swiss cheese & egg filling in a puff pastry shell, served with a garden salad.",
            categhory: 1,
            type: 'breakfast',
            pricing: [10.45]
        }, { merge: true })
        await productRef.doc('b8ffsc').set({

            name: "Fresh Fruit Salad Cup",
            description: "",
            categhory: 1,
            type: 'breakfast',
            pricing: [4.95]
        }, { merge: true })
        await productRef.doc('b9yghc').set({

            name: "Yogurt La Fermiere Orange Blossom",
            description: "",
            categhory: 1,
            type: 'breakfast',
            pricing: [4.95]
        }, { merge: true })
        await productRef.doc('b10ygfc').set({

            name: "Yogurt La Fermiere Mango Passionfruit",
            description: "",
            categhory: 1,
            type: 'breakfast',
            pricing: [5.6]
        }, { merge: true })

    }

    async addBakery() {

        const productRef = db.collection('products')

        await productRef.doc('ba1c').set({
            name: "Croissant",
            description: "Croissant – rich and tasty with a crisp crust and a deliciously soft centre.",
            categhory: 2,
            type: 'bakery',
            pricing: [2.55]
        }, { merge: true })
        await productRef.doc('ba2pac').set({
            name: "Chocolate Croissant x 4",
            description: "Our Pain au Chocolat is a best seller for a reason, made with pure butter and a heart of rich, dark chocolate.",
            categhory: 2,
            type: 'bakery',
            pricing: [15]
        }, { merge: true })
        await productRef.doc('ba3ac').set({
            name: "Almond Croissant",
            description: "",
            categhory: 2,
            type: 'bakery',
            pricing: [3.65]
        }, { merge: true })
        await productRef.doc('ba3cac').set({
            name: "Chocolate Almond Croissant",
            description: "",
            categhory: 2,
            type: 'bakery',
            pricing: [4.59]
        }, { merge: true })
        await productRef.doc('ba4er').set({
            name: "Escargot Raisins x 4",
            description: "These delicious pastries are made with a rich buttery dough filled with vanilla custard and plump raisins.",
            categhory: 2,
            type: 'bakery',
            pricing: [5.65]
        }, { merge: true })
        await productRef.doc('ba5ltd').set({
            name: "Lemon Tartlet Duo",
            description: "A pair of individual tartlets – crisp shortcrust pastry filled with a refreshing lemon cream.",
            categhory: 2,
            type: 'bakery',
            pricing: [3.25]
        }, { merge: true })
        await productRef.doc('ba6tfap').set({
            name: "Tartelette Fine Aux Pommes",
            description: "This new Apple Tartlet makes a great light dessert, as it has no pastry cream.",
            categhory: 2,
            type: 'bakery',
            pricing: [3.45]
        }, { merge: true })
        await productRef.doc('ba7st').set({
            name: "4 Strawberry Tartlets",
            description: "Crisp, sweet shortcrust pastry filled with a smooth vanilla custard cream and topped with fresh strawberries.",
            categhory: 2,
            type: 'bakery',
            pricing: [15.45]
        }, { merge: true })
        await productRef.doc('ba8ee').set({
            name: "Elephant Ear",
            description: "A crisp, butter puff pastry biscuit. The puff pastry is rolled up with sugar, sliced and baked so that the sugar caramelises.",
            categhory: 2,
            type: 'bakery',
            pricing: [2.95]
        }, { merge: true })
        await productRef.doc('ba9mcb').set({
            name: "Mini Chocolat Beignet",
            description: "A delicious soft mini doughnut with a chocolate hazelnut filling.",
            categhory: 2,
            type: 'bakery',
            pricing: [3.3]
        }, { merge: true })
        await productRef.doc('ba11ce').set({
            name: "Chocolate Éclair",
            description: "Chocolate hazelnut, red fruit, apple.",
            categhory: 2,
            type: 'bakery',
            pricing: [3.55]
        }, { merge: true })
        await productRef.doc('ba12m').set({
            name: "Croissant Box (10)",
            description: "10 Fresh Baked Croissants to Share.",
            categhory: 2,
            type: 'bakery',
            pricing: [30]
        }, { merge: true })
        await productRef.doc('ba13c').set({
            name: "Mini Beignets Box (30)",
            description: "A Mix of Sugar Donuts and Chocolate Hazelnut Donuts.",
            categhory: 2,
            type: 'bakery',
            pricing: [25]
        }, { merge: true })
    }

    async addDrinks() {
        const productRef = db.collection('products')

        await productRef.doc('ct1rc').set({
            name: "Coffe",
            description: "",
            categhory: 3,
            type: 'drinks',
            pricing: [
                1.99,
                2.9
            ]
        }, { merge: true })
        await productRef.doc('ct2cal').set({
            name: "Cafe Au Lait",
            description: "Coffee, hot milk.",
            categhory: 3,
            type: 'drinks',
            pricing: [
                2,
                2.55
            ]
        }, { merge: true })
        await productRef.doc('ct3e').set({
            name: "Espresso",
            description: "",
            categhory: 3,
            type: 'drinks',
            pricing: [
                2.45,
                2.95
            ]
        }, { merge: true })
        await productRef.doc('ct4m').set({
            name: "Macchiato",
            description: "Espresso topped with froth.",
            categhory: 3,
            type: 'drinks',
            pricing: [
                2.75,
                3.25
            ]
        }, { merge: true })
        await productRef.doc('ct5a').set({
            name: "Americano",
            description: "Espresso, hot water.",
            categhory: 3,
            type: 'drinks',
            pricing: [
                2.45,
                2.95
            ]
        }, { merge: true })
        await productRef.doc('ct6c').set({
            name: "Cappuccino",
            description: "Espresso, hot milk, froth.",
            categhory: 3,
            type: 'drinks',
            pricing: [
                2.95,
                3.95
            ]
        }, { merge: true })
        await productRef.doc('ct7').set({
            name: "Late",
            description: "Espresso, hot milk.",
            categhory: 3,
            type: 'drinks',
            pricing: [
                2.95,
                3.95
            ]
        }, { merge: true })
        await productRef.doc('ct8m').set({
            name: "Mochaccino",
            description: "Cappuccino with chocolate.",
            categhory: 3,
            type: 'drinks',
            pricing: [
                4.45,
                5.95
            ]
        }, { merge: true })
        await productRef.doc('ct9hc').set({
            name: "Hot Chocolate",
            description: "",
            categhory: 3,
            type: 'drinks',
            pricing: [
                4.45,
                5.95
            ]
        }, { merge: true })
        await productRef.doc('ct10ic').set({
            name: "Iced Coffee",
            description: "",
            categhory: 3,
            type: 'drinks',
            pricing: [2.65]
        }, { merge: true })
        await productRef.doc('ct11ic').set({
            name: "Iced Cappuccino",
            description: "",
            categhory: 0,
            type: ' ',
            pricing: [4.45]
        }, { merge: true })
        await productRef.doc('ct12il').set({
            name: "Iced Latte",
            description: "",
            categhory: 3,
            type: 'drinks',
            pricing: [4.45]
        }, { merge: true })
        await productRef.doc('ct13im').set({
            name: "Iced Mochaccino",
            description: "",
            categhory: 3,
            type: 'drinks',
            pricing: [4.95]
        }, { merge: true })
        await productRef.doc('ct14ot').set({
            name: "Organic Tea",
            description: "",
            categhory: 3,
            type: 'drinks',
            pricing: [3.45]
        }, { merge: true })
    }
}

