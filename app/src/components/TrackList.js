import React from 'react';
function TrackList (props){
    return (
        <>
            <br/>
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
                                    <button className="button is-danger is-small is-outlined">View</button>
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