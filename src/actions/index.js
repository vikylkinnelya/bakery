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

const setProductModal = (param) => ({
    type: 'SET_DETAILS_MODAL_VISIBILITY',
    payload: param
})

const setModalVisibility = () => ({
    type: 'SET_MODAL_VISIBILITY'
})

const showTost = (bool) => ({
    type: 'SHOW_TOST',
    payload: bool
})

const setWeekOffer = () => ({
    type: 'SET_WEEK_OFFER'
})

const setLatestProducts = () => ({
    type: 'SET_LATEST_PRODUCTS'
})

export {
    setMenu, setLoading, setError,
    setMenuType,
    addToCart, deleteFromCart, decCount,
    setFormVisibility, setProductModal, setModalVisibility,
    setWeekOffer, setLatestProducts,
    showTost
}