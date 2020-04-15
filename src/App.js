import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hnApi";

function App() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <div className="App">
      <p>{JSON.stringify(storyIds)}</p>
    </div>
  );
}

export default App;
