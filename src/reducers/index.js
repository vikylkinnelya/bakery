const initialState = {
    menu: [],
    menuTotalItems: 0,
    error: false,
    loading: false,
    menuType: 'all',
    cart: [],
    totalPrice: 0,
    latestProducts: [],
    weekOffer: [],
    formIsOpen: false,
    modalIsShown: false,
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
                menuTotalItems: normalMenu.length,
                loading: false
            };

        case 'SET_LOADING':
            return {
                ...state,
                menu: state.menu,
                loading: action.payload
            };

        case 'SET_ERROR':
            return {
                ...state,
                error: true
            };

        case 'SET_MENU_TYPE':
            return {
                ...state,
                menuType: action.payload
            }

        case 'SET_MENU_TOTAL_ITEMS':
            return {
                ...state,
                menuTotalItems: action.payload
            }

        /* case 'SET_MENU_PAGE':
            return {
                ...state,
                lastVisible: action.payload
            } */

        /* case 'SET_LOCATION':
            return {
                ...state,
                location: action.loc
            } */

        case 'ADD_TO_CART':

            const id = action.payload
            const param = action.param
            let priceIdx

            if (param === 'L') {
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
            }

            console.log(priceIdx)

            const itemIdxinCart = state.cart.findIndex(el => el.id === id)

            if (itemIdxinCart === -1) {
                const item = state.menu.find(item => item.id === id)

                const newItem = {
                    name: item.name,
                    id: id + '-' + param,
                    param: param,
                    price: item.pricing[priceIdx],
                    count: 1
                }

                return {
                    ...state,
                    cart: [...state.cart, newItem],
                    totalPrice: state.totalPrice + newItem.price
                };
            }
            else {
                const itemInCart = state.cart.find(el => el.id === id)
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
                    totalPrice: state.totalPrice + newItem.price
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
                totalPrice: state.totalPrice + itemToDel.price
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
                totalPrice: state.totalPrice - newDecItem.price
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
                weekOffer: offer.slice(0,3)
            }

        default:
            return state;
    }


}

export default reducer;