import { Comment } from "../src/types";
import { expect } from "@jest/globals";

export const validateComment = (comment: Comment) => {
  expect(comment).toHaveProperty("id");
  expect(comment).toHaveProperty("postId");
  expect(comment).toHaveProperty("name");
  expect(comment).toHaveProperty("email");
  expect(comment).toHaveProperty("body");
};
