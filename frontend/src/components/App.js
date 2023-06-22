import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, onLogin, onRegister } from './Navbar';
import LoginForm from './LoginForm';
import Mainpage from './Mainpage';
import Contacts from './Contacts';
import Services from './Services';
import Account from './Account';
import NewProfile from './NewProfile'
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import { getAuthToken } from '../axios_helper'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(getAuthToken() !== null && getAuthToken() !== "null");
    console.log("appjs " + isAuthenticated);

    const handleLogin = (e, email, password) => {
        onLogin(e, email, password);
      };

    const handleRegister = (event, surname, firstname, patronymic, email, password) => {
        onRegister(event, surname, firstname, patronymic, email, password);
    };

    return (
        <>
            <BrowserRouter>
            <div className="min-h-screen">
                <Navbar isAuthenticated={isAuthenticated} handleLogout={() => setIsAuthenticated(false)} />
                <Routes>
                    <Route
                        path="/login/*"
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
                    <Route path="/services" element={<Services isAuthenticated = {isAuthenticated} />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/newprofile" element={<NewProfile />} />
                </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;

