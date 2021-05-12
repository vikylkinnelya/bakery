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

        default:
            return state;
    }


}

export default reducer;