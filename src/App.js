import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import VideoCard from "./VideoCard";
function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    // app component run once and won't run again
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      {/* logo */}
      {/* text */}
      <div className="app__top">
        <img
          className="app__topLogo"
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
          alt="insta logo"
        />
        <h1>Reels</h1>
      </div>
      {/* scrollable conatainer */}
      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
