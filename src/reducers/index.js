const initialState = {
    menu: [],
    menuTotalLength: 0,
    error: false,
    loading: false,
    menuType: 'all',
    cart: [],
    cartTotalPrice: 0,
    latestProducts: [],
    weekOfferItems: [],
    formIsOpen: false,
    modalIsShown: false,
    tostIsShown: false,
    tostTitle: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_MENU':

            const menu = action.payload
            const normalMenu = []

            menu.forEach(data => {
                const dataItem = {
                    id: data.id,
                    ...data.data()
                }
                normalMenu.push(dataItem)
            })

            return {
                ...state,
                menu: normalMenu,
                menuTotalLength: normalMenu.length,
                loading: false
            };

        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };

        case 'SET_MENU_TYPE':
            return {
                ...state,
                menuType: action.payload
            }

        /* case 'SET_MENU_TOTAL_ITEMS':
            return {
                ...state,
                menuTotalLength: action.payload
            } */

        case 'ADD_TO_CART':

            const id = action.payload
            const param = action.param ? action.param : ''
            const idWithParam = action.param ? id + '-' + param : id
            let priceIdx = { L: 1 || 2, M: 0 || 1, S: 0, '': 0 }

            console.log(priceIdx, 'price idx')

            /* if (param === 'L') {
                priceIdx = 1 || 2
            }
            else if (param === 'M') {
                priceIdx = 0 || 1
            }
            else if (param === 'S') {
                priceIdx = 0
            }
            else {
                priceIdx = 0
            } */

            const itemIdxinCart = state.cart.findIndex(el => el.id === idWithParam)

            if (itemIdxinCart === -1) {
                const item = state.menu.find(item => item.id === id)

                console.log(item.pricing[priceIdx[param]])

                const newItem = {
                    name: item.name,
                    id: idWithParam,
                    param: param,
                    price: item.pricing[priceIdx[param]],
                    count: 1
                }

                return {
                    ...state,
                    cart: [...state.cart, newItem],
                    cartTotalPrice: state.cartTotalPrice + newItem.price,
                    tostTitle: newItem.name
                };
            }
            else {
                const itemInCart = state.cart.find(el => el.id === idWithParam)
                const newItem = {
                    ...itemInCart,
                    count: ++itemInCart.count
                }
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, itemIdxinCart),
                        newItem,
                        ...state.cart.slice(itemIdxinCart + 1)
                    ],
                    cartTotalPrice: state.cartTotalPrice + newItem.price,
                    tostTitle: newItem.name
                }
            }

        case 'DELETE_FROM_CART':

            const idToDelWithParam = action.payload
            const itemIdxToDelinCart = state.cart.findIndex(el => el.id === idToDelWithParam)
            const itemToDel = state.cart[itemIdxToDelinCart]
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, itemIdxToDelinCart),
                    ...state.cart.slice(itemIdxToDelinCart + 1)
                ],
                cartTotalPrice: state.cartTotalPrice + itemToDel.price
            }

        case 'DEC_COUNT':
            const idToDecCount = action.payload
            const itemIdxToDecCount = state.cart.findIndex(el => el.id === idToDecCount)
            const itemToDecCount = state.cart[itemIdxToDecCount]
            const newDecItem = {
                ...itemToDecCount,
                count: --itemToDecCount.count
            }
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, itemIdxToDecCount),
                    newDecItem,
                    ...state.cart.slice(itemIdxToDecCount + 1)
                ],
                cartTotalPrice: state.cartTotalPrice - newDecItem.price
            }

        case 'SET_FORM_VISIBILITY':
            return {
                ...state,
                formIsOpen: !state.formIsOpen
            }

        case 'SET_MODAL_VISIBILITY':
            return {
                ...state,
                modalIsShown: !state.modalIsShown
            }

        case 'SET_LATEST_PRODUCTS':
            return {
                ...state,
                latestProducts: state.menu.slice(0, 12)
            }

        case 'SET_WEEK_OFFER':
            const offer = state.menu.filter(el => el.type === 'offer')
            return {
                ...state,
                weekOfferItems: offer.slice(0, 3)
            }


        case 'SHOW_TOST':
            return {
                ...state,
                tostIsShown: action.payload
            }


        default:
            return state;
    }


}

export default reducer;