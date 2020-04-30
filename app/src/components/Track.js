import React, {useState ,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  useParams } from 'react-router-dom'
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import { getTrack } from "../store/actions/tracklistActions";


export default () => {
  let track = useSelector((state) => state.tracklistReducer.track);
  const dispatch = useDispatch();
  const { trackId } = useParams();


  const {url} = useRouteMatch();
  let closeLink = url.split('/');
  closeLink.pop();
  closeLink = closeLink.join('/');

  const [ loading, setLoading ] = useState(false)

  useEffect(()=> {
    setLoading(true)
    dispatch(getTrack(trackId));
    setLoading(false)
    // let apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`;
    // fetch(apiUrl, {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //     "x-rapidapi-key": "006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
    //   }
    // })
    // .then( res => res.json())
    // .then( res => {
    //   setTrack(res);
    // })
    // .catch(console.log)
    // .finally( () => setLoading(false))
  }, [trackId])

  if (loading) return( 
    <>
      <div class="card text-white bg-dark player">
        <h1>Fetching Preview...</h1>
      </div>
    </>
  )

  return (
    <>
        <div className="card bg-light player">
          <div className="card-header player-header">
            <b>{track.title} by {track.artist.name}</b>
            <Link to={`${closeLink}`} key={track.id}>
              <i className="fa fa-close"></i>
            </Link>

          </div>
          <div className="card-body player-body">
            <audio controls>
              <source src={track.preview} type="audio/mpeg"/>
            </audio>
          </div>
        </div>
    </>
  )
}