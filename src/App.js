import "./App.css";
import { Album } from "./Album";
import { albums } from "./data";

const album = albums[0];

function App() {
  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => {
        return (
          <Album
            name={album.name}
            released={album.released}
            artist={album.artist}
            cover={album.cover}
          />
        );
      })}
    </div>
  );
}

export default App;
