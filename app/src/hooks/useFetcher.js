import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTracklist } from "../store/actions/tracklistActions";
export default (searchInput, doSearch) => {
  const tracks = useSelector((state)=> state.tracklistReducer.tracklist)
  const dispatch = useDispatch();
  useEffect( ()=> {
      if(!searchInput){
          searchInput = 'The Beatles'
      }
      dispatch(getTracklist(searchInput));
    }, [doSearch])
  return {tracks};
}