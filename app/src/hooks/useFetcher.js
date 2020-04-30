import {useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTracklist } from "../store/actions/tracklistActions";

export default (searchInput, doSearch) => {
    const [error, setError] = useState(null);
    // const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const tracks = useSelector((state)=> state.tracklistReducer.tracklist)
    const dispatch = useDispatch();

    useEffect( ()=> {
        if(!searchInput){
            searchInput = 'The Beatles'
        }
        setLoading(true);
        dispatch(getTracklist(searchInput));

        setLoading(false);
        // let apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchInput}`;
        // fetch(apiUrl, {
        //   "method": "GET",
        //   "headers": {
        //     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        //     "x-rapidapi-key": "006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
        //   }
        // })
        // .then( res => res.json())
        // .then( res => {
        //   setLoading(false);
        //   setTracks(res.data);
        // })
        // .catch(err=>{
        //   setError(err);
        // })
        // .finally(()=> {
        //     setLoading(false);
        // })
      }, [doSearch])
    return { loading, tracks, error};
}
