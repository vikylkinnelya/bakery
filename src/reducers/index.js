const initialState = {
    menu: [],
    error: false,
    loading: true,
    cart: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payload,
                loadig: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loadig: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };

        default:
            return state;
    }


}

export default reducer;