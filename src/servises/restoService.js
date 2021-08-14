import { db, storage } from '../components/firebase';

export default class RestoService {

    async setOrder(orderData, customerData) {
        const date = Date.now()
        const ordersRef = db.collection('orders')
        await ordersRef.doc(`${date}`).set({
            order: orderData,
            customer: customerData,
            date: new Date()
        })
    }

    async setSubscriber(subscriber) {
        const subscribersRef = db.collection('subscribers')
        await subscribersRef.doc(`${subscriber.email}`).set({
            ...subscriber,
            date: new Date()
        })
    }

    async setFeedback(feedback) {
        const date = new Date()
        const feedbackRef = db.collection('feedback')
        await feedbackRef.doc(`${date}`).set({
            ...feedback,
            date: new Date()
        })
    }

    async getImg(folder, id, type = 'jpg', param = '-min') {
        let imgURL
        await storage.child(`${folder}/${id.split('-')[0]}${param}.${type}`)
            .getDownloadURL()
            .then(url => {
                imgURL = url
            }).catch(error => {
                console.log(error)
            })
        return imgURL
    }

    async fetchMenu(type = 'all') {
        let data
        let response

        if (type !== 'all') {
            response = this.fetchMenuType(type)
        } else {
            response = this.fetchMenuAll()
        }

        data = await response.get({ source: 'cache' })
        if (!data.exists) {
            data = await response.get({sourse:'server'})
        }
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
        const response = await db.collection('products')
            .limit(12)
            .get()
        return response.docs
    }

    async fetchOffer() {
        const response = await db.collection('products')
            .where("type", "==", 'offer')
            .get()
        return response.docs
    }

    async addMenu() {
        const productRef = db.collection('products')

        await productRef.doc('safroro5').set({
            name: "Sandwich Fromage Rosette",
            description: "A flavourful filling of salami and gherkins in a sandwich bread which has been rolled in grated cheese before baking.",
            type: 'lunch',
            ingredients: ['sandwich', 'salami', 'cheese'],
            pricing: [4.10],
            img: await this.getImg('menu', 'safroro5')
        }, { merge: true })
        await productRef.doc('b4sd').set({
            name: "Sandwich Dieppois",
            description: "A generous filling of tuna mayonnaise with tomato, cucumber and lettuce in a freshly made bread.",
            ingredients: ['tomato', 'tyna', 'cucumber'],
            type: 'lunch',
            pricing: [4.45],
            img: await this.getImg('menu', 'b4sd')
        }, { merge: true })
        
        
        await productRef.doc('saseca4').set({
            name: "Sandwich Sesame Camembert",
            description: "Freshly baked sesame seed bread, buttered and filled with creamy Camembert cheese and lettuce.",
            ingredients: ['cheese'],
            type: 'lunch',
            pricing: [4.20],
            img: await this.getImg('menu', 'saseca4')
        }, { merge: true })
        await productRef.doc('b3hecb').set({
            name: "Ham, Egg & Cheese Baguette",
            description: "Ham, scrambled egg and Swiss cheese on a baguettine.",
            ingredients: ['cheese', 'egg', 'ham'],
            type: 'lunch',
            pricing: [6.65],
            img: await this.getImg('menu', 'b3hecb')
        }, { merge: true })
        await productRef.doc('b5sm').set({
            name: "Sandwich Montagnard",
            description: "Dry-cured Coppa ham, Comté cheese, tomatoes, olive tapenade and salad leaves in a freshly baked poppy seed bread.",
            ingredients: ['cheese', 'tomato', 'ham'],
            type: 'lunch',
            pricing: [4.45],
            img: await this.getImg('menu', 'b5sm')
        }, { merge: true })
        await productRef.doc('b6ql').set({
            name: "Quiche Lorraine",
            description: "Paris ham, bacon, Swiss cheese & egg filling in a puff pastry shell, served with a garden salad.",
            ingredients: ['cheese', 'ham', 'bacon', 'egg'],
            type: 'lunch',
            label: 'New offer',
            pricing: [10.45],
            img: await this.getImg('menu', 'b6ql')
        }, { merge: true })
        await productRef.doc('b1hcc').set({
            name: "Ham & Cheese Croissant",
            description: "Ham, Swiss cheese, lettuce, tomato and a butter spread on a croissant.",
            ingredients: ['cheese', 'ham', 'tomato'],
            type: 'lunch',
            pricing: [4.95],
            img: await this.getImg('menu', 'b1hcc'),
        }, { merge: true })
        await productRef.doc('b3ssc').set({
            name: "Smoked Salmon Croissant",
            description: "Smoked salmon, lettuce, tomato and lemon spread on a croissant.",
            ingredients: ['salmon', 'lettuce', 'tomato'],
            type: 'lunch',
            label: 'Best seller',
            pricing: [5.45],
            img: await this.getImg('menu', 'b3ssc')
        }, { merge: true })
        await productRef.doc('b2hescc').set({
            name: "Ham, Egg & Swiss Cheese Croissant",
            description: "Ham, scrambled egg and Swiss cheese on a croissant.",
            ingredients: ['ham', 'egg', 'cheese'],
            type: 'lunch',
            pricing: [5.65],
            img: await this.getImg('menu', 'b2hescc')
        }, { merge: true })


        await productRef.doc('b11hfbj').set({
            name: "Half Flute, Butter & Jam",
            description: "Half Baguette served with butter and Jam",
            type: 'breakfast',
            pricing: [2.95],
            img: await this.getImg('menu', 'b11hfbj')
        }, { merge: true })

        await productRef.doc('ba1c').set({
            name: "Croissant",
            description: "Croissant – rich and tasty with a crisp crust and a deliciously soft centre. 1|4",
            type: 'breakfast',
            label: 'Best seller',
            pricing: [2.55, 5.95],
            img: await this.getImg('menu', 'ba1c')
        }, { merge: true })

        await productRef.doc('ba2pac').set({
            name: "Chocolate Croissant x 4",
            description: "Our Pain au Chocolat is a best seller for a reason, made with pure butter and a heart of rich, dark chocolate.",
            ingredients: ['chocolate'],
            type: 'breakfast',
            pricing: [15],
            img: await this.getImg('menu', 'ba2pac')
        }, { merge: true })
        await productRef.doc('ba3ac').set({
            name: "Almond Croissant",
            description: "",
            type: 'breakfast',
            pricing: [3.65],
            img: await this.getImg('menu', 'ba3ac')
        }, { merge: true })
        await productRef.doc('ba3cac').set({
            name: "Chocolate Almond Croissant",
            description: "",
            ingredients: ['chocolate'],
            type: 'breakfast',
            pricing: [4.59],
            img: await this.getImg('menu', 'ba3cac')
        }, { merge: true })
        await productRef.doc('ba4er').set({
            name: "Escargot Raisins x 4",
            description: "These delicious pastries are made with a rich buttery dough filled with vanilla custard and plump raisins.",
            ingredients: ['vanilla'],
            type: 'breakfast',
            pricing: [5.65],
            img: await this.getImg('menu', 'ba4er')
        }, { merge: true })
        await productRef.doc('ba8ee').set({
            name: "Elephant Ear",
            description: "A crisp, butter puff pastry biscuit. The puff pastry is rolled up with sugar, sliced and baked so that the sugar caramelises.",
            type: 'breakfast',
            pricing: [2.95],
            img: await this.getImg('menu', 'ba8ee')
        }, { merge: true })
        await productRef.doc('ba9mcb').set({
            name: "Mini Chocolat Beignet",
            description: "A delicious soft mini doughnut with a chocolate hazelnut filling.",
            ingredients: ['chocolate', 'hazelnut'],
            type: 'breakfast',
            pricing: [3.3],
            img: await this.getImg('menu', 'ba9mcb')
        }, { merge: true })
        await productRef.doc('ba11ce').set({
            name: "Chocolate Éclair",
            description: "Chocolate hazelnut, red fruit, apple.",
            ingredients: ['chocolate', 'hazelnut'],
            type: 'breakfast',
            pricing: [3.55],
            img: await this.getImg('menu', 'ba11ce')
        }, { merge: true })


        await productRef.doc('ba6tfap').set({
            name: "Tartelette Fine Aux Pommes",
            description: "This new Apple Tartlet makes a great light dessert, as it has no pastry cream.",
            type: 'tarts',
            label: 'New offer',
            pricing: [3.45],
            img: await this.getImg('menu', 'ba6tfap')
        }, { merge: true })
        await productRef.doc('ba5ltd').set({
            name: "Lemon Tartlet Duo",
            description: "A pair of individual tartlets – crisp shortcrust pastry filled with a refreshing lemon cream.",
            ingredients: ['lemon'],
            type: 'tarts',
            pricing: [5.25],
            img: await this.getImg('menu', 'ba5ltd')
        }, { merge: true })

        await productRef.doc('strawtarts1').set({
            name: "Strawberry Tartlets",
            description: "Crisp, sweet shortcrust pastry filled with a smooth vanilla custard cream and topped with fresh strawberries. 2|4|6",
            ingredients: ['strawberry'],
            type: 'tarts',
            label: 'Best seller',
            pricing: [8, 15.45, 20],
            img: await this.getImg('menu', 'strawtarts1')
        }, { merge: true })
        await productRef.doc('choctarts2').set({
            name: "Chocolate Tartlets",
            description: "Crisp sweet shortcrust pastry cases filled with rich, dark chocolate ganache. Delicious for dessert or as a treat with tea or coffee. 2|4|6",
            ingredients: ['chocolate'],
            type: 'tarts',
            pricing: [8, 15.45, 20],
            img: await this.getImg('menu', 'choctarts2')
        }, { merge: true })


        await productRef.doc('breapatwol1').set({
            name: "Pain Two Olives",
            description: "Two Olive Bread. Crusty but light, with an intense flavour of the olives of Provence, scented with thyme, this is irresistible. 400|800",
            type: 'bread',
            pricing: [3.3, 6.6],
            img: await this.getImg('menu', 'breapatwol1')
        }, { merge: true })

        await productRef.doc('breabag2').set({
            name: "Classic Baguette Duo",
            description: "A pair of our best-selling classic baguettes made the old-fashioned way with PAUL white flour, natural yeast, sea salt and water.",
            type: 'bread',
            pricing: [2.95],
            img: await this.getImg('menu', 'breabag2')
        }, { merge: true })

        await productRef.doc('breapadeca3').set({
            name: "Pain De Campagne",
            description: "This is our rich, brown Farmhouse Bread made from a soft blend of natural yeast, rye flour, milled flour and sea salt. 400|800",
            type: 'bread',
            label: 'Best seller',
            pricing: [2.75, 5.5],
            img: await this.getImg('menu', 'breapadeca3')
        }, { merge: true })

        await productRef.doc('breapami4').set({
            name: "Pain De Campagne",
            description: "A large, round multigrain loaf made with a mix of wheat, barley, spelt, rye and buckwheat flour with added buckwheat and crushed soya seeds, topped with pumpkin, sunflower, millet, brown flax and sesame seeds.. 400|800",
            type: 'bread',
            pricing: [3.25, 5.95],
            img: await this.getImg('menu', 'breapami4')
        }, { merge: true })


        await productRef.doc('ct1rc').set({
            name: "Coffe",
            description: "",
            type: 'drinks',
            pricing: [
                1.99,
                2.9
            ],
            img: await this.getImg('menu', 'ct1rc')
        }, { merge: true })
        await productRef.doc('ct2cal').set({
            name: "Cafe Au Lait",
            description: "Coffee, hot milk.",
            type: 'drinks',
            pricing: [
                2,
                2.55
            ],
            img: await this.getImg('menu', 'ct2cal')
        }, { merge: true })
        await productRef.doc('ct3e').set({
            name: "Espresso",
            description: "",
            type: 'drinks',
            pricing: [
                2.45,
                2.95
            ],
            img: await this.getImg('menu', 'ct3e')
        }, { merge: true })
        await productRef.doc('ct4m').set({
            name: "Macchiato",
            description: "Espresso topped with froth.",
            type: 'drinks',
            pricing: [
                2.75,
                3.25
            ],
            img: await this.getImg('menu', 'ct4m')
        }, { merge: true })
        await productRef.doc('ct5a').set({
            name: "Americano",
            description: "Espresso, hot water.",
            type: 'drinks',
            pricing: [
                2.45,
                2.95
            ],
            img: await this.getImg('menu', 'ct5a')
        }, { merge: true })
        await productRef.doc('ct6c').set({
            name: "Cappuccino",
            description: "Espresso, hot milk, froth.",
            type: 'drinks',
            pricing: [
                2.95,
                3.95
            ],
            img: await this.getImg('menu', 'ct6c')
        }, { merge: true })
        await productRef.doc('ct7').set({
            name: "Late",
            description: "Espresso, hot milk.",
            type: 'drinks',
            pricing: [
                2.95,
                3.95
            ],
            img: await this.getImg('menu', 'ct7')
        }, { merge: true })
        await productRef.doc('ct8m').set({
            name: "Mochaccino",
            description: "Cappuccino with chocolate.",
            type: 'drinks',
            pricing: [
                4.45,
                5.95
            ],
            img: await this.getImg('menu', 'ct8m')
        }, { merge: true })
        await productRef.doc('ct9hc').set({
            name: "Hot Chocolate",
            description: "",
            type: 'drinks',
            pricing: [
                4.45,
                5.95
            ],
            img: await this.getImg('menu', 'ct9hc')
        }, { merge: true })

        
        await productRef.doc('wo1').set({
            name: "Afternoon Tea Delivery",
            description: "For those looking for a moment to savour, and a special treat delivered straight to your door, our new Afternoon Tea is for you. Perfect for 2 people, our box of indulgent treats feature sweet and savoury creations , all lovingly made in the PAUL kitchen",
            type: 'offer',
            ingredients: [
                '2 x Tomato, Mozzarella & Pesto',
                '2 x Chicken Salad',
                '2 x Mini Strawberry Tartelettes',
                '2 x Mini Caramel Tartelettes',
                '2 x Frangipane Tartelettes',
                '12 x Assorted Mini Macarons',
                '4 x Scones with Clotted Cream & Jam',
                'Fairtrade & Organic English Breakfast Tea',
                'Afternoon Tea Menu Card'],
            pricing: [30],
            img: await this.getImg('menu', 'wo1-img'),
            preImg: await this.getImg('menu', 'wo1'),
        }, { merge: true })

        await productRef.doc('wo2').set({
            name: "Mini Macarons Assorted",
            description: "A sharing selection of our adorable mini macaroons. 36 macaroons, 6 of each flavour:",
            type: 'offer',
            ingredients: [
                'raspberry', 'chocolate', 'pistachio', 'vanilla', 'coffee', 'lime'],
            pricing: [30],
            img: await this.getImg('menu', 'wo2-img'),
            preImg: await this.getImg('menu', 'wo2'),
        }, { merge: true })

        await productRef.doc('wo3').set({
            name: "Hug in a Box",
            description: "A box full of delicious treats, this is a very special hug to send to friends or family around the country to show them you love them.",
            type: 'offer',
            ingredients: [
                'Chocolate croissant loaf',
                '12 x mini macarons',
                '250g bag of our ground coffee',
                '1 litre carton of our rich, darkHot Chocolate',
                '6 x buttery shortbread biscuits'],
            pricing: [30],
            img: await this.getImg('menu', 'wo3-img'),
            preImg: await this.getImg('menu', 'wo3'),
        }, { merge: true })
    }



}

