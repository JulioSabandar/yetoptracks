import { GET_TRACKLIST, GET_TRACK, SET_TRACK_LOADING, SET_TRACKLIST_LOADING} from '../actions/types';
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
  },
  track_loading: true,
  tracklist_loading: true
}

export default (state = initialState, action) => {
  switch(action.type){
    case GET_TRACKLIST : 
      return { ...state, tracklist_loading: false, tracklist : action.payload }
    case GET_TRACK:
      return { ...state, track_loading: false, track : action.payload }
    case SET_TRACK_LOADING: 
      return { ...state, track_loading: action.payload}
    case SET_TRACKLIST_LOADING: 
      return { ...state, tracklist_loading: action.payload}
    default :
      return state
  }
}
