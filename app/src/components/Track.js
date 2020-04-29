import React, {useState ,useEffect} from 'react'
import {  useParams } from 'react-router-dom'

export default (props) => {
  const { trackId } = useParams()
  const [ track, setTrack ] = useState({
    id: '',
    name: '',
    artist: {
      name: ''
    },
    album: {
      name: ''
    }
  })
  const [ loading, setLoading ] = useState(false)

  useEffect(()=> {
    console.log(trackId)
    console.log("masuk use Effect")
    setLoading(true)
    let apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`;
    fetch(apiUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
      }
    })
    .then( res => res.json())
    .then( res => {
      setTrack(res);
    })
    .catch(console.log)
    .finally( () => setLoading(false))
  }, [trackId])

  if (loading) return( 
    <>
      <div class="card text-white bg-dark player">
        <h1>Fetching Preview...</h1>
      </div>
    </>
  )

  return (
    <>
        <div class="card bg-light player">
          <div class="card-header"><b>{track.title} by {track.artist.name}</b></div>
          <div class="card-body">
            <audio controls>
              <source src={track.preview} type="audio/mpeg"/>
            </audio>
          </div>
        </div>
    </>
  )
}