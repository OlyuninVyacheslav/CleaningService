import React from 'react';
import { NavLink } from 'react-router-dom';
import { request, setAuthHeader } from '../axios_helper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function logout() {
  setAuthHeader(null);
  window.location.reload();
  window.location.assign('/')
};

export function onLogin(e, email, password) {
  e.preventDefault();
  request(
    "POST",
    "/login",
    {
      email: email,
      password: password
    }).then(
      (response) => {
        setAuthHeader(response.data.token);
        window.location.reload();
      }).catch(
        (error) => {
          setAuthHeader(null);
          toast.error('Неверный логин или пароль!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      );
};

export function onRegister(event, surname, firstname, patronymic, email, password) {
  event.preventDefault();
  request(
    "POST",
    "/register",
    {
      surname: surname,
      firstname: firstname,
      patronymic: patronymic,
      email: email,
      password: password
    }).then(
      (response) => {
        setAuthHeader(response.data.token);
        window.location.reload();
      }).catch(
        (error) => {
          setAuthHeader(null);
        }
      );
};


export const Navbar = ({ isAuthenticated, handleLogout }) => {
  console.log("navbar " + isAuthenticated);
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto bg-blue-600 shadow-lg">
          <a href="/" className="flex items-center text-white ml-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Cleaning service</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col mt-4 md:flex-row md:mt-0">
              <li className="md:hover:bg-blue-800 p-4 ">
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Главная
                </NavLink>
              </li>
              <li className="md:hover:bg-blue-800 p-4">
                <NavLink
                  to="/contacts"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Контакты
                </NavLink>
              </li>
              <li className="md:hover:bg-blue-800 p-4">
                <NavLink
                  to="/services"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  Услуги
                </NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="md:hover:bg-blue-800 p-4">
                    <NavLink
                      to="/account"
                      className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Личный кабинет
                    </NavLink>
                  </li>
                  <li className="md:hover:bg-red-800 bg-red-600 p-4 ml-16">
                    <button
                      onClick={() => {
                        handleLogout();
                        logout();
                      }}
                      className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                    >
                      Выйти
                    </button>
                  </li>
                </>
              ) : (
                <li className="md:hover:bg-green-800 bg-green-600 p-4 ml-16">
                  <NavLink
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                  >
                    Войти
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};