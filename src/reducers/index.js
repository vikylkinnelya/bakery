const initialState = {
    menu: [],
    error: false,
    loading: false,
    menuType: 'all',
    menuTotalItems: '',
    menuPage: 1,
    cart: [],
    totalPrice: 0

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

            const idWithParam = action.payload
            const id = idWithParam.split('-')[0]
            const param = idWithParam.split('-')[1]
            const priceIdxByParam = param === 'M' ? 0 : 1

            const itemIdxinCart = state.cart.findIndex(el => el.id === idWithParam)
            
            if (itemIdxinCart === -1) {
                const item = state.menu.find(item => item.id === id)

                const newItem = {
                    name: item.name,
                    id: idWithParam,
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
                        ...state.cart.slice(itemIdxinCart+1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }


        default:
            return state;
    }


}

export default reducer;