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

<<<<<<< HEAD
const addToCart = (id, size = '') => {
=======
const addToCart = (id) => {
    console.log(id, 'id with param')
    console.log(id.split('-')[0], 'id without param')
    console.log(id.split('-')[1], 'id with param')
>>>>>>> d57726d5e9ca4495e16a476522e1ebfa4cf65805
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