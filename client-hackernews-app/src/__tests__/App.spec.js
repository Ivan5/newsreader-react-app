import { React } from "react";
import { act } from "react-dom/test-utils";
import App from "../App";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";
import { cleanup, render, waitForElement } from "@testing-library/react";

beforeEach(cleanup);

jest.mock("../hooks/useInfiniteScroll.js");

test("renders the application", async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));

  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, queryByTestId } = render(<App />);
    await waitForElement(() => [
      expect(getByText("Hacker news stories")).toBeTruthy(),
      expect(getByText("Hacker news stories")).toBeTruthy(),
      expect(queryByTestId("story-by").textContent).toEqual("By: KArl Hadwen"),
    ]);
  });
});
