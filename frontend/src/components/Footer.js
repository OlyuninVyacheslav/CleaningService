import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="mt-16 bg-blue-600">
            <div className="max-w-screen-xl mx-auto px-4  text-white py-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0 mr-8">
                        <h3 className="text-xl font-bold">Наша компания</h3>
                        <nav className="mt-2">
                            <ul className="space-y-2">
                                <li>
                                    <NavLink to="/">О нас</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">Услуги</NavLink>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Контактная информация</h3>
                        <p className="mt-2"> ул. Ленина, д. 10, офис 205</p>
                        <p>Телефон: +7 (495) 123-45-67</p>
                        <p>Email: info@yourcleaningservice.com</p>
                    </div>
                </div>
                <hr className="border-white my-4" />
                <p className="text-center text-sm">© 2023 Клининг-сервис. Все права защищены.</p>
            </div>
        </footer>


    )
}

export default Footer;