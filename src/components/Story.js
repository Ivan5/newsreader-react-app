import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";

export default function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data);
  }, []);

  return (
    <div>
      <p>I'm story {JSON.stringify(storyId)}</p>
    </div>
  );
}
