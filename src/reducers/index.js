const initialState = {
    menu: [],
    menuBreakfast: [],
    menuBakery: [],
    menuDrinks: [],
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
            return {
                ...state,
                menu: action.payload[0].concat(action.payload[1], action.payload[2]),
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

        case 'SET_MENU_TOTAL_ITEMS':
            return {
                ...state,
                menuTotalItems: action.payload
            }

        case 'SET_LOCATION':
            return {
                ...state,
                location: action.loc
            }

        default:
            return state;
    }


}

export default reducer;