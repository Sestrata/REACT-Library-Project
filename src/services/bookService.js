import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/books';

export const bookServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const books = Object.values(result);
        return books;
    };

    const getOne = async (bookId) => {
        const result = await request.get(`${baseUrl}/${bookId}`);
        return result;
    };

    const create = async (bookData) => {
        const result = await request.post(baseUrl, bookData);
        return result;
    };

    return {
        getAll,
        getOne,
        create,
    };
};