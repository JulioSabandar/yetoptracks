import { GET_TRACKLIST, GET_TRACK} from "./types";


export function getTracklist(searchInput) {
    return (dispatch) => {
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
            console.log(err)
        })
    };
}
  
export function getTrack(trackId) {
    return (dispatch) => {
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
        });
    };
}
  


