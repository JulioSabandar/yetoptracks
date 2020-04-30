import { GET_TRACKLIST, GET_TRACK, SET_TRACK_LOADING, SET_TRACKLIST_LOADING} from "./types";
import * as bulmaToast from "bulma-toast";

export function getTracklist(searchInput) {
    return (dispatch) => {
        dispatch(setTracklistLoading(true))
        let apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchInput}`;
        fetch(apiUrl, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key": "006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
            }
        })
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: GET_TRACKLIST,
            payload:  res.data
          });
        })
        .catch(err=>{
            bulmaToast.toast({ 
                message: `Fetching Error!`,
                type: 'is-danger',
                position: "top-center",
                opacity: 0.8
            })
        })
    };
}
  
export function getTrack(trackId) {
    return (dispatch) => {
        dispatch(setTrackLoading(true))
        let apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`;
        fetch(apiUrl, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key": "006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch({
                type: GET_TRACK,
                payload: res
            });
        })
        .catch(err=>{
            bulmaToast.toast({ 
                message: `Fetching Error!`,
                type: 'is-danger',
                position: "top-center",
                opacity: 0.8
            })
        })
    };
}

export const setTrackLoading = (value) => {
    return {
        type : SET_TRACK_LOADING,
        payload : value
    }
}

export const setTracklistLoading = (value) => {
    return {
        type : SET_TRACKLIST_LOADING,
        payload : value
    }
}