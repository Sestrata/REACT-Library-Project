import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BookProvider } from './contexts/BookContext';

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
import { RouteGuard } from './components/common/RouteGuard';
import { BookOwner } from './components/common/BookOwner';

function App() {
    return (
        <AuthProvider>
            <BookProvider>
                <div className="App">
                    <Header />

                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/ganre" element={<Ganre />} />
                            <Route path="/catalog/:bookId" element={<BookDetails />} />
                            <Route element={<RouteGuard />}>
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/createBook" element={<CreateBook />} />
                                <Route path="/catalog/:bookId/edit" element={
                                    <BookOwner>
                                        <EditBook />
                                    </BookOwner>
                                } />
                                <Route path="/logout" element={<Logout />} />
                            </Route>
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </BookProvider>
        </AuthProvider>
    );
};

export default App;
