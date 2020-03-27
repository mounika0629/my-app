import { combineReducers } from 'redux';
import rootReducer from './mainStore'
import mainStore2 from './mainStore2'

export default combineReducers({
    root : rootReducer,
    dat: mainStore2
})