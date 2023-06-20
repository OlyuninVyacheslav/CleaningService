import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, onLogin, onRegister } from './Navbar';
import LoginForm from './LoginForm';
import Mainpage from './Mainpage';
import Contacts from './Contacts';
import Services from './Services';
import Account from './Account';
import NewProfile from './NewProfile'
import { ToastContainer } from 'react-toastify';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth_token") !== null);

    const handleLogin = (e, email, password) => {
        onLogin(e, email, password);
        setIsAuthenticated(true);
    };

    const handleRegister = (event, surname, firstname, patronymic, email, password) => {
        onRegister(event, surname, firstname, patronymic, email, password);
        setIsAuthenticated(true);
    };

    return (
        <>
            <BrowserRouter>
                <Navbar isAuthenticated={isAuthenticated} handleLogout={() => setIsAuthenticated(false)} />
                <Routes>
                    <Route
                        path="/login"
                        element={isAuthenticated ? (
                            <Routes>
                                <Route path="/" element={<Navigate to="/" replace />} />
                            </Routes>
                        ) : (
                            <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
                        )}
                    />
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/newprofile" element={<NewProfile />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;

