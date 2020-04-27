import React from 'react';

class SearchBar extends React.Component{
    render(){
        return (
            <>
                <input type="text"
                    class="form-control"
                    id="search"
                    placeholder="Who is your favourite music artist?"
                    onChange={(e)=>{
                            this.props.handleSearchInput(e)
                        }
                    }
                />
                <button onClick={this.props.searchArtist} className="button is-success">Search</button>
            </>
        )
    }
} 

export default SearchBar;