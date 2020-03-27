
import {
    LOAD_DATA,
    EDIT_DATA
} from '../action/actionType'


export default (state = {}, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_DATA:
            return { ...state, [action.payload.id]: action.payload }  
        default:
            return state
    }
}