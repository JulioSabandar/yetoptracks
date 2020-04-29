import { SET_PLAYLIST, SET_PLAYLIST_LOADING } from '../actions/types'

const initialState = {
  playlist : [],
  loading : false
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_PLAYLIST : 
      return { ...state, playlist : action.payload }
    case SET_PLAYLIST_LOADING : {
      return { ...state, loading : action.payload }
    }
    default :
      return state
  }
}
