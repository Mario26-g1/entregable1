

import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import posts from "./utils/phrases.json";
import randomElementArray from "./utils/randomElement";
import PostsCard from "./components/PhrasesCard";
import Buton from "./components/ButtonFhrases";

const backRandon = [1, 2, 3, 4];

function App() {
  const initialPosts = randomElementArray(posts);

  const initialBackRandon = randomElementArray(backRandon);

  const [postRandom, setpostRandom] = useState(initialPosts);

  const [randonBack, setrandonBack] = useState(initialBackRandon);

  const objecStyle = {
    backgroundImage: `url('./image/fondo${randonBack}.png')`,
  
  };

  return (
    <div className="app" style={objecStyle} randonBack={setrandonBack}>
      {/* <img className="banner_fondo" src="./banner.svg" alt="" /> */}



      <div className="banner_container">
        <div className="post">
      
          <PostsCard postRandom={postRandom} />
        </div>
        
      </div>
      <div className="buton">
          <Buton
            setpostRandom={setpostRandom}
            setrandonBack={setrandonBack}
            backRandon={backRandon}
          />
        </div>
    </div>
  );
}

export default App;
