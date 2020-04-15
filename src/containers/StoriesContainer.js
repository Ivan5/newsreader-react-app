import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";

export default function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <div className="App">
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </div>
  );
}
