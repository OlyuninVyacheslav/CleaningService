import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { request } from '../axios_helper';
import { useNavigate } from 'react-router-dom';

function NewProfile() {
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [surname, setSurname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (telephone.length !== 11) {
      setError('Номер телефона должен содержать 11 символов');
      return;
    }

    const newProfile = {
      address: address,
      telephone: telephone,
      surname: surname,
      firstname: firstname,
      patronymic: patronymic
    };

    request('post', '/profiles', newProfile)
      .then(response => {
        if (response.status === 201) {
          setAddress('');
          setTelephone('');
          setSurname('');
          setFirstname('');
          setPatronymic('');
          setError('');
        
          // Redirect to "/account"
          navigate('/account');

          toast.success('Профиль успешно создан!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        } else {
          console.error('Ошибка при создании профиля');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleTelephoneKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);

    if (keyCode === 8 || keyCode === 9) {
      // Разрешить использование клавиши Backspace
      return;
    }

    if (!/^\d$/.test(keyValue)) {
      event.preventDefault();
    }
  };;

  return (
    <div className="flex justify-center items-center mt-12 text-gray-800">
      <div className="max-w-md w-full border-x-2 border-blue-500 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Добавить новый профиль</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <label className="w-20 mr-2 mb-1">Адрес:</label>
            <input
              tabIndex={1}
              type="text"
              value={address}
              onChange={event => setAddress(event.target.value)}
              required
              maxLength={255}
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 flex-1"
            />
          </div>
          <div className="mb-4 flex">
            <label className="w-20 mr-2 mb-1">Телефон:</label>
            <input
              tabIndex={2}
              type="text"
              value={telephone}
              onChange={event => setTelephone(event.target.value)}
              onKeyDown={handleTelephoneKeyPress}
              onPaste={event => event.preventDefault()} // Запретить вставку
              required
              maxLength={11}
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 flex-1"
            />
          </div>
          <div className="mb-4 flex">
            <label className="w-20 mr-2 mb-1">Фамилия:</label>
            <input
              tabIndex={3}
              type="text"
              value={surname}
              onChange={event => setSurname(event.target.value)}
              required
              maxLength={255}
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 flex-1"
            />
          </div>
          <div className="mb-4 flex">
            <label className="w-20 mr-2 mb-1">Имя:</label>
            <input
              tabIndex={4}
              type="text"
              value={firstname}
              onChange={event => setFirstname(event.target.value)}
              required
              maxLength={255}
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 flex-1"
            />
          </div>
          <div className="mb-4 flex">
            <label className="w-20 mr-2 mb-1">Отчество:</label>
            <input
              tabIndex={5}
              type="text"
              value={patronymic}
              onChange={event => setPatronymic(event.target.value)}
              maxLength={255}
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 flex-1"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-32 rounded"
            >
              Создать профиль
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProfile;


