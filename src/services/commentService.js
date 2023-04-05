import {requestFactory} from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (bookId) => {
    const searchQuery = encodeURIComponent(`bookId="${bookId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
};

export const createComment = async (bookId, comment) => {
    const result = await request.post(baseUrl, { bookId, comment } );
    return result;
};