import React, {useState ,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  useParams } from 'react-router-dom'
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import { getTrack } from "../store/actions/tracklistActions";


export default () => {
  const { track, track_loading } = useSelector(state => state.tracklistReducer)
  const dispatch = useDispatch();
  const { trackId } = useParams();
  const {url} = useRouteMatch();
  let closeLink = url.split('/');
  closeLink.pop();
  closeLink = closeLink.join('/');

  useEffect(()=> {
    dispatch(getTrack(trackId));
  }, [trackId])

  if (track_loading == true) return( 
    <>
      <div className="card text-white bg-dark player">
        <h1>Fetching Preview...</h1>
      </div>
    </>
  )
  else return (
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