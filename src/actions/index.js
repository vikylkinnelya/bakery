const setMenu = (newMenu) => {
    return {
        type: 'SET_MENU',
        payload: newMenu
    }
}

const setLoading = () => {
    return {
        type:'SET_LOADING'
    }
}

const setError = () => {
    return {
        type: 'SET_ERROR'
    }
}

const setMenuType = (type) => {
    return {
        type: 'SET_MENU_TYPE',
        payload: type
    }
}

export {
    setMenu, setLoading, setError, 
    setMenuType
}