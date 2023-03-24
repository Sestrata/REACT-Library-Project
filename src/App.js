import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext';

import { bookServiceFactory } from './services/bookService';
import { authServiceFactory } from './services/authService';

import './Reset.css';
import './App.css';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateBook } from './components/CreateBook/CreateBook';
import { Ganre } from './components/Ganre/Ganre';
import { Catalog } from './components/Catalog/Catalog';
import { BookDetails } from './components/BookDetails/BookDetails';
import { Logout } from './components/Logout/Logout';
import { Error } from './components/Error/Error'
import { EditBook } from './components/EditBook/EditBook';

function App() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [auth, setAuth] = useState({});
    const bookService = bookServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result)
            })
    }, [bookService]); //, []

    const onCreateBookSubmit = async (data) => {
        const newBook = await bookService.createBook(data);
        setBooks(state => [...state, newBook]);
        navigate('/catalog');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { rePassword, ...registerData } = values;
        if (rePassword !== registerData.password) {
            return; //
        }

        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        // todo authoriz
        // await authService.logout();
        setAuth({});
    };

    const onBookEditSubmit = async (values) => {
        const result = await bookService.editBook(values._id, values);
        setBooks(state => [...state, result]);
        navigate(`/catalog/${values._id}`);
    };

    const contextValue = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,  //t->f->t; f->t->f
    };

    return (
        <AuthContext.Provider value={contextValue}>
            <div className="App">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home books={books} />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/logout" element={<Logout />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/createBook" element={<CreateBook onCreateBookSubmit={onCreateBookSubmit} />}></Route>
                        <Route path="/catalog" element={<Catalog books={books} />}></Route>
                        <Route path="/ganre" element={<Ganre />}></Route>
                        <Route path="/catalog/:bookId" element={<BookDetails />} />
                        <Route path="/catalog/:bookId/edit" element={<EditBook onBookEditSubmit={onBookEditSubmit} />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
};

export default App;
