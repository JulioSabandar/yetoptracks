import React from 'react';

function SearchBar (props){
    return (
        <>
            <div className="searchDiv">
                <input 
                    type="text" 
                    className="input is-rounded searchDivElement"
                    type="text"
                    placeholder="What is your favourite song or music artist?"
                    onChange={(e)=>{
                        props.handleSearchInput(e)
                    }
                }/>
                <button onClick={props.searchArtist} className="button is-danger searchDivElement">Search</button>
            </div>
        </>
    )
}


export default SearchBar;