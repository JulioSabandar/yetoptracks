import { SET_PLAYLIST} from '../actions/types'

const initialState = {
  playlist : [],
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_PLAYLIST : 
      return { ...state, playlist : action.payload }
    default :
      return state
  }
}
