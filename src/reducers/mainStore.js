
import {
    LOAD_DATA,
    EDIT_DATA,
    ON_UPDATE,
    ON_DELETE,
    ON_SEARCH
} from '../action/actionType'


export default (state = {}, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return { state: action.payload , add :action.payload }
        case ON_SEARCH:
            let searchedData = state.add.filter((item)=>item.title.includes(action.payload.trim()))
            return { ...state, state: searchedData }
        case ON_DELETE:
            let DeletedData = state.state.filter((item)=>action.payload !== item.id)
            return { ...state,state: DeletedData , add : DeletedData}
        case EDIT_DATA:
          let filteredData = state.state.filter((item)=>{
              console.log(item)
             return  item.id === action.payload
          }) 
          console.log(filteredData)
            return { ...state, filteredData:filteredData[0]  } 
        case ON_UPDATE:
            console.log(action.payload , action.load)
            let filteredIndex = state.state.findIndex((item)=>action.load === item.id) 
            state.state[filteredIndex].title = action.payload.title
            state.state[filteredIndex].body = action.payload.body
            return { ...state }
        default:
            return state
    }
}

