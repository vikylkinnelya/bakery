const setMenu = (newMenu) => ({
    type: 'SET_MENU',
    payload: newMenu
})

const setLoading = (bool) => ({
    payload: bool,
    type: 'SET_LOADING'
})

const setError = () => ({
    type: 'SET_ERROR'
})

const setMenuType = (type) => ({
    type: 'SET_MENU_TYPE',
    payload: type
})

const setMenuTotalItems = (count) => ({
    type: 'SET_MENU_TOTAL_ITEMS',
    payload: count
})

const setLastVisible = (page) => ({
    type: 'SET_MENU_PAGE',
    payload: page
})

const setLocation = (loc) => ({
    type: 'SET_LOCATION',
    payload: loc
})

const addToCart = (id, param) => {
    return {
        type: 'ADD_TO_CART',
        payload: id,
        param: param
    }
}

const setFormVisibility = () => ({
    type: 'SET_FORM_VISIBILITY'
})

const setModalVisibility = () => ({
    type: 'SET_MODAL_VISIBILITY'
})

const deleteFromCart = (id) => {
    return {
        payload: id,
        type: 'DELETE_FROM_CART'
    }
}

const decCount = (id) => {
    return {
        payload: id,
        type: 'DEC_COUNT'
    }
}

const setWeekOffer = () => ({
    type: 'SET_WEEK_OFFER'
})

const setLatestProducts = () => ({
    type: 'SET_LATEST_PRODUCTS'
})

const showTost = () => ({
    type: 'SHOW_TOST'
})



export {
    setMenu, setLoading, setError,
    setMenuType, setLastVisible, setMenuTotalItems,
    setLocation,
    addToCart, deleteFromCart, decCount,
    setFormVisibility, setModalVisibility,
    setWeekOffer, setLatestProducts,
    showTost
}