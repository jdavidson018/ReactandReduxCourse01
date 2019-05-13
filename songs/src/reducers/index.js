import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Yo-yo", duration: "4:05" },
    { title: "No Diggity", duration: "2:15" },
    { title: "All Star", duration: "1:05" },
    { title: "I Want it That Way", duration: "6:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
