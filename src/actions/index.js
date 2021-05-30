const setMenu = (newMenu) => ({
    type: 'SET_MENU',
    payload: newMenu
})

const setLoading = () => ({
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

const setMenuPage = (page) => ({
    type: 'SET_MENU_PAGE',
    payload: page
})

const setLocation = (loc) => ({
    type: 'SET_LOCATION',
    payload: loc
})

const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
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



export {
    setMenu, setLoading, setError,
    setMenuType, setMenuPage, setMenuTotalItems,
    setLocation,
    addToCart, deleteFromCart,  decCount,
    setFormVisibility, setModalVisibility

}