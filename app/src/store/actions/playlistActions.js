import { SET_PLAYLIST, SET_PLAYLIST_LOADING } from "./types";

export const setPlaylist = (playlist) => {
  return {
    type : SET_PLAYLIST,
    payload : playlist
  }
}

export const setLoading = (value) => {
  return {
    type : SET_PLAYLIST_LOADING,
    payload : value
  }
}
