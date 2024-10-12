import React from "react";
import Playlist from "./Playlist/Playlist";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;