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

const setMenuPage = (page) => ({
    type: 'SET_MENU_PAGE',
    payload: page
})

const setLocation = (loc) => ({
    type: 'SET_LOCATION',
    payload: loc
})

const addToCart = (id) => {
    console.log(id)
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}

export {
    setMenu, setLoading, setError,
    setMenuType, setMenuPage,
    setLocation,
    addToCart

}