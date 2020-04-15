import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hnApi";

export default function StoriesContainer() {
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
