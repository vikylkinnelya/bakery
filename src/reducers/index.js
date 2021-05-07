const initialState = {
    menuType: '',
    menu: [],
    error: false,
    loading: true,
    cart: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_MENU':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };


        case 'SET_LOADING':
            return {
                ...state,
                menu: state.menu,
                loadig: true
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

        default:
            return state;
    }


}

export default reducer;