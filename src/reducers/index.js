const initialState = {
    menu: [],
    error: false,
    loading: false,
    menuType: 'all',
    menuTotalItems: '',
    menuPage: 1,
    cart: [],
    totalPrice: 0,
    formIsOpen: false

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_MENU':

            const newMenu = state.menuType === 'all' ?
                action.payload.map(el => el.menu) :
                action.payload.menu

            const resultMenu = state.menuType === 'all' ?
                newMenu[0].concat(newMenu[1], newMenu[2]) :
                newMenu

            return {
                ...state,
                menu: resultMenu,
                loading: false
            };

        case 'SET_LOADING':
            return {
                ...state,
                menu: state.menu,
                loading: true
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

        case 'SET_MENU_PAGE':
            return {
                ...state,
                menuPage: action.payload
            }

        case 'SET_LOCATION':
            return {
                ...state,
                location: action.loc
            }

        case 'ADD_TO_CART':

            const idToAddWithParam = action.payload
            const idToAddWithoutParam = idToAddWithParam.split('-')[0]
            const param = idToAddWithParam.split('-')[1]
            const priceIdxByParam = param === 'M' ? 0 : 1

            const itemIdxinCart = state.cart.findIndex(el => el.id === idToAddWithParam)

            if (itemIdxinCart === -1) {
                const item = state.menu.find(item => item.id === idToAddWithoutParam)

                const newItem = {
                    name: item.name,
                    id: idToAddWithParam,
                    param: param,
                    price: param ? item.pricing[priceIdxByParam] : item.price,
                    count: 1
                }
                return {
                    ...state,
                    cart: [...state.cart, newItem],
                    totalPrice: state.totalPrice + newItem.price
                };
            }
            else {
                const itemInCart = state.cart.find(el => el.id === idToAddWithParam)
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


        default:
            return state;
    }


}

export default reducer;