import db from '../components/firebase'

export default class RestoService {
    //_apiBase = 'http://localhost:3000';
    //_apiBase = 'https://my-json-server.typicode.com/vikylkinnelya/bakery';

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
        /* const response = await fetch(`${this._apiBase}/subscribers`, { //запрос к orders в json файле
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(subscriber) //в массив просто записывается емэйл подписчика, айди добавляется автоматически
        });
        if (!response.ok) {
            throw new Error('json error');
        } */

        const date = new Date()
        const subscribersRef = db.collection('subscribers')
        await subscribersRef.doc(`${date}`).set({
            ...subscriber,
            date: new Date()
        })

    }

    async setFeedback(feedback) {
        /* const numberOfFeedback = await this.getOrderNumber('feedback'); //узнаем номер заказа по порядку
        const response = await fetch(`${this._apiBase}/feedback`, { //запрос к orders в json файле
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(feedback)
        });
        if (!response.ok) {
            throw new Error('json error');
        } */

        const date = Date.now()
        const feedbackRef = db.collection('feedback')
        await feedbackRef.doc(`${date}`).set({
            ...feedback,
            date: new Date()
        })
    }

    async fetchMenu(type = 'all', page = undefined) {

        let data
        let response

        if (type !== 'all') {
            response = this.fetchMenuType(type)
        } else {
            response = this.fetchMenuAll()
        }

        data = await response.get()
        return data.docs
    }

    fetchMenuAll() {
        const response = db.collection('products')
        return response
    }

    fetchMenuType(menuType) {
        const response = db.collection('products')
            .where("type", "==", menuType)
        return response
    }

    async fetchMenuHome() {

        const getOptions = {
            source: 'cache'
        }

        const response = await db.collection('products')
            .limit(12)
            .get()
        return response.docs
    }

    /* async fetchMenuSize(type) {
        let response
        if (type === 'all') {
            response = db.collection('products')
        } else {
            response = db.collection('products')
                .where("type", "==", type);
        }
        response = await response.get()
        return response.size
    } */


    async addMenu() {
        const productRef = db.collection('products')
        await productRef.doc('safroro5').set({
            name: "Sandwich Fromage Rosette",
            description: "A flavourful filling of salami and gherkins in a sandwich bread which has been rolled in grated cheese before baking.",
            type: 'lunch',
            ingredients: ['sandwich', 'salami', 'cheese'],
            pricing: [4.10]
        }, { merge: true })
        await productRef.doc('b4sd').set({
            name: "Sandwich Dieppois",
            description: "A generous filling of tuna mayonnaise with tomato, cucumber and lettuce in a freshly made bread.",
            ingredients: ['tomato', 'tyna', 'cucumber'],
            type: 'lunch',
            pricing: [4.45]
        }, { merge: true })
        await productRef.doc('saseca4').set({
            name: "Sandwich Sesame Camembert",
            description: "Freshly baked sesame seed bread, buttered and filled with creamy Camembert cheese and lettuce.",
            ingredients: ['cheese'],
            type: 'lunch',
            pricing: [4.20]
        }, { merge: true })
        await productRef.doc('b3hecb').set({
            name: "Ham, Egg & Cheese Baguette",
            description: "Ham, scrambled egg and Swiss cheese on a baguettine.",
            ingredients: ['cheese', 'egg', 'ham'],
            type: 'lunch',
            pricing: [6.65]
        }, { merge: true })
        await productRef.doc('b5sm').set({
            name: "Sandwich Montagnard",
            description: "Dry-cured Coppa ham, Comté cheese, tomatoes, olive tapenade and salad leaves in a freshly baked poppy seed bread.",
            ingredients: ['cheese', 'tomato', 'ham'],
            type: 'lunch',
            pricing: [4.45]
        }, { merge: true })
        await productRef.doc('b6ql').set({
            name: "Quiche Lorraine",
            description: "Paris ham, bacon, Swiss cheese & egg filling in a puff pastry shell, served with a garden salad.",
            ingredients: ['cheese', 'ham', 'bacon', 'egg'],
            type: 'lunch',
            pricing: [10.45]
        }, { merge: true })
        await productRef.doc('b1hcc').set({
            name: "Ham & Cheese Croissant",
            description: "Ham, Swiss cheese, lettuce, tomato and a butter spread on a croissant.",
            ingredients: ['cheese', 'ham', 'tomato'],
            type: 'lunch',
            pricing: [4.95],
        }, { merge: true })
        await productRef.doc('b3ssc').set({
            name: "Smoked Salmon Croissant",
            description: "Smoked salmon, lettuce, tomato and lemon spread on a croissant.",
            ingredients: ['salmon', 'lettuce', 'tomato'],
            type: 'lunch',
            pricing: [5.45]
        }, { merge: true })
        await productRef.doc('b2hescc').set({
            name: "Ham, Egg & Swiss Cheese Croissant",
            description: "Ham, scrambled egg and Swiss cheese on a croissant.",
            ingredients: ['ham', 'egg', 'cheese'],
            type: 'lunch',
            pricing: [5.65]
        }, { merge: true })



        await productRef.doc('b11hfbj').set({
            name: "Half Flute, Butter & Jam",
            description: "Half Baguette served with butter and Jam",
            type: 'breakfast',
            pricing: [2.95]
        }, { merge: true })

        await productRef.doc('ba1c').set({
            name: "Croissant",
            description: "Croissant – rich and tasty with a crisp crust and a deliciously soft centre. 1|4",
            type: 'breakfast',
            pricing: [2.55, 5.95]
        }, { merge: true })

        await productRef.doc('ba2pac').set({
            name: "Chocolate Croissant x 4",
            description: "Our Pain au Chocolat is a best seller for a reason, made with pure butter and a heart of rich, dark chocolate.",
            ingredients: ['chocolate'],
            type: 'breakfast',
            pricing: [15]
        }, { merge: true })
        await productRef.doc('ba3ac').set({
            name: "Almond Croissant",
            description: "",
            type: 'breakfast',
            pricing: [3.65]
        }, { merge: true })
        await productRef.doc('ba3cac').set({
            name: "Chocolate Almond Croissant",
            description: "",
            ingredients: ['chocolate'],
            type: 'breakfast',
            pricing: [4.59]
        }, { merge: true })
        await productRef.doc('ba4er').set({
            name: "Escargot Raisins x 4",
            description: "These delicious pastries are made with a rich buttery dough filled with vanilla custard and plump raisins.",
            ingredients: ['vanilla'],
            type: 'breakfast',
            pricing: [5.65]
        }, { merge: true })
        await productRef.doc('ba8ee').set({
            name: "Elephant Ear",
            description: "A crisp, butter puff pastry biscuit. The puff pastry is rolled up with sugar, sliced and baked so that the sugar caramelises.",
            type: 'breakfast',
            pricing: [2.95]
        }, { merge: true })
        await productRef.doc('ba9mcb').set({
            name: "Mini Chocolat Beignet",
            description: "A delicious soft mini doughnut with a chocolate hazelnut filling.",
            ingredients: ['chocolate', 'hazelnut'],
            type: 'breakfast',
            pricing: [3.3]
        }, { merge: true })
        await productRef.doc('ba11ce').set({
            name: "Chocolate Éclair",
            description: "Chocolate hazelnut, red fruit, apple.",
            ingredients: ['chocolate', 'hazelnut'],
            type: 'breakfast',
            pricing: [3.55]
        }, { merge: true })


        await productRef.doc('ba6tfap').set({
            name: "Tartelette Fine Aux Pommes",
            description: "This new Apple Tartlet makes a great light dessert, as it has no pastry cream.",
            type: 'tarts',
            pricing: [3.45]
        }, { merge: true })
        await productRef.doc('ba5ltd').set({
            name: "Lemon Tartlet Duo",
            description: "A pair of individual tartlets – crisp shortcrust pastry filled with a refreshing lemon cream.",
            ingredients: ['lemon'],
            type: 'tarts',
            pricing: [5.25]
        }, { merge: true })

        await productRef.doc('strawtarts1').set({
            name: "Strawberry Tartlets",
            description: "Crisp, sweet shortcrust pastry filled with a smooth vanilla custard cream and topped with fresh strawberries. 2|4|6",
            ingredients: ['strawberry'],
            type: 'tarts',
            pricing: [8, 15.45, 20]
        }, { merge: true })
        await productRef.doc('choctarts2').set({
            name: "Chocolate Tartlets",
            description: "Crisp sweet shortcrust pastry cases filled with rich, dark chocolate ganache. Delicious for dessert or as a treat with tea or coffee. 2|4|6",
            ingredients: ['chocolate'],
            type: 'tarts',
            pricing: [8, 15.45, 20]
        }, { merge: true })


        await productRef.doc('breapatwol1').set({
            name: "Pain Two Olives",
            description: "Two Olive Bread. Crusty but light, with an intense flavour of the olives of Provence, scented with thyme, this is irresistible. 400|800",
            type: 'bread',
            pricing: [3.3, 6.6]
        }, { merge: true })

        await productRef.doc('breabag2').set({
            name: "Classic Baguette Duo",
            description: "A pair of our best-selling classic baguettes made the old-fashioned way with PAUL white flour, natural yeast, sea salt and water.",
            type: 'bread',
            pricing: [2.95]
        }, { merge: true })

        await productRef.doc('breapadeca3').set({
            name: "Pain De Campagne",
            description: "This is our rich, brown Farmhouse Bread made from a soft blend of natural yeast, rye flour, milled flour and sea salt. 400|800",
            type: 'bread',
            pricing: [2.75, 5.5]
        }, { merge: true })

        await productRef.doc('breapami4').set({
            name: "Pain De Campagne",
            description: "A large, round multigrain loaf made with a mix of wheat, barley, spelt, rye and buckwheat flour with added buckwheat and crushed soya seeds, topped with pumpkin, sunflower, millet, brown flax and sesame seeds.. 400|800",
            type: 'bread',
            pricing: [3.25, 5.95]
        }, { merge: true })


        await productRef.doc('ct1rc').set({
            name: "Coffe",
            description: "",
            type: 'drinks',
            pricing: [
                1.99,
                2.9
            ]
        }, { merge: true })
        await productRef.doc('ct2cal').set({
            name: "Cafe Au Lait",
            description: "Coffee, hot milk.",
            type: 'drinks',
            pricing: [
                2,
                2.55
            ]
        }, { merge: true })
        await productRef.doc('ct3e').set({
            name: "Espresso",
            description: "",
            type: 'drinks',
            pricing: [
                2.45,
                2.95
            ]
        }, { merge: true })
        await productRef.doc('ct4m').set({
            name: "Macchiato",
            description: "Espresso topped with froth.",
            type: 'drinks',
            pricing: [
                2.75,
                3.25
            ]
        }, { merge: true })
        await productRef.doc('ct5a').set({
            name: "Americano",
            description: "Espresso, hot water.",
            type: 'drinks',
            pricing: [
                2.45,
                2.95
            ]
        }, { merge: true })
        await productRef.doc('ct6c').set({
            name: "Cappuccino",
            description: "Espresso, hot milk, froth.",
            type: 'drinks',
            pricing: [
                2.95,
                3.95
            ]
        }, { merge: true })
        await productRef.doc('ct7').set({
            name: "Late",
            description: "Espresso, hot milk.",
            type: 'drinks',
            pricing: [
                2.95,
                3.95
            ]
        }, { merge: true })
        await productRef.doc('ct8m').set({
            name: "Mochaccino",
            description: "Cappuccino with chocolate.",
            type: 'drinks',
            pricing: [
                4.45,
                5.95
            ]
        }, { merge: true })
        await productRef.doc('ct9hc').set({
            name: "Hot Chocolate",
            description: "",
            type: 'drinks',
            pricing: [
                4.45,
                5.95
            ]
        }, { merge: true })
        await productRef.doc('ct10ic').set({
            name: "Iced Coffee",
            description: "",
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
            type: 'drinks',
            pricing: [4.45]
        }, { merge: true })
        await productRef.doc('ct13im').set({
            name: "Iced Mochaccino",
            description: "",
            type: 'drinks',
            pricing: [4.95]
        }, { merge: true })
        await productRef.doc('ct14ot').set({
            name: "Organic Tea",
            description: "",
            type: 'drinks',
            pricing: [3.45]
        }, { merge: true })
    }

    async addBread() {

        const productRef = db.collection('products')

        await productRef.doc('ct1rc').set({
            name: "Coffe",
            description: "",
            type: 'bread',
            pricing: [
                1.99
            ]
        }, { merge: true })

    }
}

