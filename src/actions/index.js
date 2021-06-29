const setMenu = (newMenu) => ({
    type: 'SET_MENU',
    payload: newMenu
})

const setLoading = (bool) => ({
    payload: bool,
    type: 'SET_LOADING'
})

const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
})

const setMenuType = (type) => ({
    type: 'SET_MENU_TYPE',
    payload: type
})

const setMenuTotalItems = (count) => ({
    type: 'SET_MENU_TOTAL_ITEMS',
    payload: count
})

const addToCart = (id, param) => {
    return {
        type: 'ADD_TO_CART',
        payload: id,
        param: param
    }
}

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

const setFormVisibility = () => ({
    type: 'SET_FORM_VISIBILITY'
})

const setModalVisibility = () => ({
    type: 'SET_MODAL_VISIBILITY'
})

const showTost = () => ({
    type: 'SHOW_TOST'
})








const setWeekOffer = () => ({
    type: 'SET_WEEK_OFFER'
})

const setLatestProducts = () => ({
    type: 'SET_LATEST_PRODUCTS'
})




export {
    setMenu, setLoading, setError,
    setMenuType, setMenuTotalItems,
    addToCart, deleteFromCart, decCount,
    setFormVisibility, setModalVisibility,
    setWeekOffer, setLatestProducts,
    showTost
}