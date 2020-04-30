import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Track from '../components/Track';
import { setPlaylist } from "../store/actions/playlistActions";
import { useDispatch, useSelector} from 'react-redux'
import * as bulmaToast from "bulma-toast";
function TrackList (props){
    const dispatch = useDispatch();
    const { playlist} = useSelector(state => state.playlistReducer);
    const addToPlaylist = (track) => {
        playlist.push(track);
        console.log('aaaaaa')
        console.log(playlist)
        dispatch(setPlaylist(playlist));
        bulmaToast.toast({ 
            message: `${track.title} added to playlist`,
            type: 'is-danger',
            position: "top-center",
            opacity: 0.8
        });
    }
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
    const {path} = useRouteMatch();
    return (
        <>
            <br/>
            <Switch>
                    <Route exact path={path}>
                    </Route>
                    <Route path={`${path}/:trackId`}>
                        <Track/>
                    </Route>
            </Switch>
            <div>
                <h1 className="title"> Reccomended Tracks </h1>
            </div>
            <hr/>
            <>
            {props.tracks.map((track, idx) => {
                return (
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
                                            { playlist.find(x=> x.id === track.id) ?
                                                <button 
                                                className="button is-danger is-small is-rounded is-outlined card-button"
                                                onClick={() => removeFromPlaylist(track, idx)}
                                                >
                                                    Remove from playlist
                                                </button>
                                                :
                                                <button 
                                                className="button is-danger is-small is-rounded is-outlined card-button"
                                                onClick={() => addToPlaylist(track)}
                                                >
                                                    Add to playlist
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                );
            })}
            </>
        </>
    );
}
export default TrackList;