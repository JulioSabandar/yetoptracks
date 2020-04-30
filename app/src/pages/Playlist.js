import React from 'react';
import { useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Track from '../components/Track';

function Playlist() {
  const { playlist} = useSelector(state => state.playlistReducer);
  const {path} = useRouteMatch();
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
        playlist.length == 0
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