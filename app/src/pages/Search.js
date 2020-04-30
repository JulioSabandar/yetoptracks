import React,  { useState } from 'react';
import useFetch from '../hooks/useFetcher';
import TrackList from '../components/TrackList';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import { useSelector} from "react-redux";

function Search() {
    const tracklist_loading = useSelector((state)=> state.tracklistReducer.tracklist_loading);

    const [doSearch, setDoSearch] = useState(true);
    const [searchInput, setSearchInput] = useState('The Beatles');
    const { tracks } = useFetch(searchInput, doSearch);
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
          tracklist_loading
            ? <Loading/>
            : ( tracks
              ? <TrackList tracks={tracks}/>
              : (<div className="filler" > 
                  <p className="subtitle"> No results </p> 
                </div>)
              )
        }
        <br/>
      </div>
    );
}

export default Search;