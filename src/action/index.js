import API from './Api'

import {
    LOAD_DATA,
    EDIT_DATA,
    ON_UPDATE,
    ON_DELETE,
    ON_SEARCH
} from './actionType'

export const loadInitialData = () => async (dispatch, getState) => {
    let response = await API
    // console.log(response)
    dispatch({ type: LOAD_DATA, payload: response.data })
}

export const searchCont = (cont) => {
    return (dispatch) => {
        dispatch({ type: ON_SEARCH, payload: cont })
    }
}

export const onEdit = (id) => {
    // console.log(id)
    return (dispatch) => {
        dispatch({ type: EDIT_DATA, payload: id })
    }
}

export const onUpdate = (e, id) => {
    return (dispatch) => {
        dispatch({ type: ON_UPDATE, payload: e, load: id })
    }
}

export const onDelete = (Id) => {
    return (dispatch) => {
        dispatch({ type: ON_DELETE, payload: Id })
    }
}
