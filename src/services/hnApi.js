import axios from "axios";

export const baseURl = "https://hacker-news.firebaseio.com/v0/";

export const newStoriesUrl = `${baseURl}newstories.json`;
export const storyUrl = `${baseURl}item/`;

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
