import { Routes, Route } from 'react-router-dom';

import './Reset.css';
import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { RouteGuard } from './components/common/RouteGuard';
import { BookProvider } from './contexts/BookContext';
import { BookOwner } from './components/common/BookOwner';

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
import { Error } from './components/Error/Error';
import { EditBook } from './components/EditBook/EditBook';

function App() {
    return (
        <AuthProvider>
            <BookProvider>
                <div id="box">
                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route path="/ganre" element={<Ganre />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:bookId' element={<BookDetails />} />
                            <Route path='*' element={<Error />} />

                            <Route element={<RouteGuard />}>
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/createBook' element={<CreateBook />} />
                                <Route path='/catalog/:bookId/edit' element={
                                    <BookOwner>
                                        <EditBook />
                                    </BookOwner>
                                } />
                            </Route>

                        </Routes>
                    </main>

                    <Footer />
                </div>
            </BookProvider>
        </AuthProvider>
    );
};

export default App;

