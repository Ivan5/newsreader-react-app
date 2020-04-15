import axios from "axios";

export const baseURl = "https://hacker-news.firebaseio.com/v0/";

export const newStoriesUrl = `${baseURl}newstories.json`;
export const storyUrl = `${baseURl}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data);

  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
