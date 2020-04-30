import { GET_TRACKLIST, GET_TRACK, SET_TRACKLIST_LOADING} from '../actions/types'

const initialState = {
  tracklist : [],
  track: {
    id: '',
    title: '',
    artist: {
      name: ''
    },
    album: {
      title: '',
      cover_medium:''
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type){
    case GET_TRACKLIST : 
        return { ...state, tracklist : action.payload }
    case GET_TRACK:
        return { ...state, track : action.payload }
    default :
      return state
  }
}
