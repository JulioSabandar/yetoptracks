import React,  { useState } from 'react';
import useFetch from '../hooks/useFetcher';
import TrackList from '../components/TrackList';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import { useSelector} from "react-redux";
// import { setLoading } from "../store/actions/tracklistActions";

import * as bulmaToast from "bulma-toast";
function Search() {
    const loadingg = useSelector((state)=> state.tracklistReducer.loading);

    const [doSearch, setDoSearch] = useState(true);
    const [searchInput, setSearchInput] = useState('The Beatles');
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
          ? ( bulmaToast.toast({ 
                message: `Error!`,
                type: 'is-danger',
                position: "top-center",
                opacity: 0.8
              })
            )
          : (loading
            ? <Loading/>
            : ( tracks
              ? <TrackList tracks={tracks}/>
              : (<div className="filler" > 
                  <p className="subtitle"> No results </p> 
                </div>)
              )
            )
          )
        }
        <br/>
      </div>
    );
}

export default Search;