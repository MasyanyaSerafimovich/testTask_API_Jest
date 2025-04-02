import { getComments, addComment } from '../src/api';
import { validateComment } from "./utils";
import { Comment } from "../src/types";

describe('API Tests for Comments', () => {
  const testPostId = 1;
  const validComment: Omit<Comment, 'id' | 'postId'> = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    body: 'This is a test comment.'
  };

  test('Should fetch comments for a post', async () => {
    const comments: Comment[] = await getComments(testPostId);
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBeGreaterThan(0);
    comments.forEach(validateComment);
  });

  test('Should add a new comment', async () => {
    const comment: Comment = await addComment(testPostId, validComment.name, validComment.email, validComment.body);
    validateComment(comment);
    expect(comment.name).toBe(validComment.name);
    expect(comment.email).toBe(validComment.email);
    expect(comment.body).toBe(validComment.body);
  });

  test('Should return an empty array for comments of a non-existent post', async () => {
    const comments = await getComments(999999); // предполагаем, что такого поста нет

    expect(comments).toEqual([]);
  });

  test('Should accept an empty comment body', async () => {
    const comment = await addComment(testPostId, 'John Doe', 'john.doe@example.com', '');

    expect(comment.body).toBe('');
  });

  test('Should return comments for an existing post', async () => {
    const comments: Comment[] = await getComments(testPostId);
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBeGreaterThan(0); // Убедимся, что для поста есть комментарии
  });

});
