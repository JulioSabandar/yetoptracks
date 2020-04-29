import React,  { useState } from 'react';
import useFetch from '../hooks/useFetcher'
import TrackList from '../components/TrackList';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';


function Search() {
    const [doSearch, setDoSearch] = useState(true);
    const [searchInput, setSearchInput] = useState('Queen');
    const { loading, tracks, error} = useFetch(searchInput, doSearch);
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }
    const searchArtist = (e) => {
        e.preventDefault();
        setDoSearch(!doSearch);
    }

    return (
      <div>
        <SearchBar
          searchArtist={searchArtist}
          handleSearchInput={handleSearchInput}
        />
        {
          (error
          ? (
              <div className="errorPage">
                <h1>You have an error</h1>
              </div>
            )
          : (loading
            ? <Loading/>
            : ( tracks.length > 0
              ? <TrackList tracks={tracks}/>
              : <div> No Results </div>
              )
            )
          )
        }
        <br/>
      </div>
    );
}

export default Search;