import React, {Component} from 'react';
import './App.sass';
import './App.css';
import TrackList from './components/TrackList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar'

class App extends Component{
  constructor(){
    super();
    this.state = {
      searchInput: null,
      songs: [],
      artistId: 230
    }
  }
  componentDidMount(){
    let apiUrl = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Kanye%20West';
    fetch(apiUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
      }
    })
    .then( res => res.json())
    .then( res => {
      return this.setState({songs: res.data})
    })
    .then(a=> {
      console.log(a)
    })
  }

  searchArtist = (e) => {
    e.preventDefault();
    let apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.searchInput}`;
    fetch(apiUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
      }
    })
    .then( res => res.json())
    .then( res => {
      return this.setState({songs: res.data})
    })
    .then(a=> {
      console.log(a)
    })
  }


  handleSearchInput = (e) => {
    console.log('Input from search bar in App.js')
    console.log(e.target.value)
    this.setState({searchInput: e.target.value});
  }


  render(){
    return (
      <div>
        <Navbar/>
        <SearchBar
          searchArtist={this.searchArtist}
          handleSearchInput={this.handleSearchInput}/>
        <TrackList tracks={this.state.songs}/>
         {JSON.stringify(this.state.songs)}
      </div>
    )
  }
}

export default App;
