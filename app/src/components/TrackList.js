import React from 'react';

class TrackList extends React.Component{
    render(){
        return (
            <>
                <hr/>
                <div>
                    <h1 className="title"> Kanye West Greatest Hits </h1>
                </div>
                <hr/>
                
                <>
                {this.props.tracks.map((track, idx) => {
                    return (
                        <div key={idx}>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={track.album.cover_medium} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8 oy">
                                    <div className="card-body">
                                        <h1 className="card-title">{track.title}</h1>
                                        <p className="card-text">{track.album.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                
                        </div>
                    )
                })}
                </>
            </>
        )
    }
} 

export default TrackList;