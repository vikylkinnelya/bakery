const initialState = {
    menu: [],
    error: false,
    loading: false,
    menuType: 'all',
    menuTotalItems: '',
    menuPage: 1,
    cart: [],

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

            const idSizeParam = action.payload
            const id = idSizeParam.split('-')[0]
            const size = idSizeParam.split('-')[1]


            const itemIdxToAdd = state.cart.findIndex(el => el.id === idSizeParam)
            if (itemIdxToAdd === -1) {
                const item = state.menu.find(el => el.id === id)
                const newItem = {
                    count: 1,
                    name: item.name,
                    

                }
            }

            return{
                ...state,
                cart: [...state.cart, action.payload]
            }

        default:
            return state;
    }


}

export default reducer;