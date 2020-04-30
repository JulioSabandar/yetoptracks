import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setPlaylist } from "../store/actions/playlistActions";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Track from '../components/Track';
import * as bulmaToast from "bulma-toast";

function Playlist() {
  const dispatch = useDispatch()
  const { playlist} = useSelector(state => state.playlistReducer);
  const {path} = useRouteMatch();
  const removeFromPlaylist = (track, idx) => {
    let temp = playlist;
    temp.splice(idx, 1);
    dispatch(setPlaylist(temp));
    bulmaToast.toast({ 
      message: `${track.title} removed from playlist`,
      type: 'is-danger',
      position: "top-center",
      opacity: 0.8
    });
  }
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="playlistContainer">
          <h1 className="title"> Your Playlist </h1>
      </div>
      <hr/>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:trackId`}>
            <Track/>
        </Route>
      </Switch>

      {
        playlist.length === 0
        ? <div className="filler">
            <p className="subtitle"> Theres nothing here yet. </p>
          </div>
        : <div className="filler">
          {
            playlist.map((track, idx)=>{
                return(
                  <div key={idx}>
                    <div className="card mb-3 trackcard">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={track.album.cover_medium} className="card-img" alt="..."/>
                            </div>
                            <div className="col-md-8 oy">
                                <div className="card-body">
                                    <h1 className="card-title">{track.title}</h1>
                                    <hr/>
                                    <h4> <b> {track.artist.name}</b>  </h4>
                                    <p className="card-text">{track.album.title}</p>
                                    <div className="button-container">
                                        <Link to={`${path}/${track.id}`} key={track.id}>
                                            <button className="button is-danger is-small is-rounded is-outlined card-button">Preview</button>
                                        </Link>
                                        <button 
                                            className="button is-danger is-small is-rounded is-outlined card-button"
                                            onClick={() => removeFromPlaylist(track, idx)}>
                                                Remove from playlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                  </div>
              )
            })
          }
        </div>
      }

    </>
  );
}
export default Playlist;