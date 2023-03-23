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
        const newBook = await bookService.create(data);
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
                        <Route path='*' element={<Error />} />
                    </Routes>
                </main>


                {/* 

        <section className="editBook">
            <form>
                <div className="container">
                    <h1>Edit Book</h1>
                    <div>
                        <label htmlFor="bookName">Book name:</label>
                        <input type="bookName" id="bookName" name="bookName" defaultValue="" />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input type="author" id="author" name="author" defaultValue="" />
                    </div>
                    <div>
                        <label htmlFor="ganre">Ganre:</label>
                        <input type="ganre" id="ganre" name="ganre" defaultValue="" />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" id="description" cols="30" rows="10"></textarea>
                    </div>
                    <div className="submitBtn">
                        <input type="submit" value="Edit book" />
                    </div>
                </div>
            </form>
        </section>

        */}

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
