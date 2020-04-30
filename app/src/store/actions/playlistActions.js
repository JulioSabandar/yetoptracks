import { SET_PLAYLIST} from "./types";

export const setPlaylist = (playlist) => {
  return {
    type : SET_PLAYLIST,
    payload : playlist
  }
}