import React, {useState} from 'react';
import useFetch from './hooks/useFetcher'
import './App.sass';
import './App.css';
import TrackList from './components/TrackList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Loading from './components/Loading';


function App(){
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
      <Navbar/>
      <div className="body">
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
      <Footer/>
    </div>
    
  );
}
export default App;
