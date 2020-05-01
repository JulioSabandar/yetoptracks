import React from 'react';
function SearchBar (props){
    return (
        <>
            <div className="searchDiv" data-testid="search-bar">
                <input 
                    type="text" 
                    className="input is-rounded searchDivElement"
                    data-testid="search-bar-input"
                    placeholder="What is your favourite song or music artist?"
                    onChange={(e)=>{
                        props.handleSearchInput(e)
                    }
                }/>
                <button 
                    onClick={props.searchArtist}
                    className="button is-danger searchDivElement"
                    data-testid="search-bar-button"
                    >
                        Search
                    </button>
            </div>
        </>
    )
}
export default SearchBar;