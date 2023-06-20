import React, { useEffect, useState } from 'react';
import { request } from '../axios_helper';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    request('get', '/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteProfile = (profileId) => {
    request('delete', `/profiles/${profileId}`)
      .then(response => {
        if (response.status === 204) {
          // Удаление прошло успешно
          // Обновляем список профилей
          setProfiles(prevProfiles => prevProfiles.filter(profile => profile.id !== profileId));

          toast.success('Профиль успешно удален!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });

        } else {
          console.error('Ошибка при удалении профиля');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Мои профили</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map(profile => (
          <div key={profile.id} className="border border-blue-500 rounded-lg p-4 shadow-xl">
            <div className="mb-2">
              <span className="font-bold">Адрес:</span> {profile.address}
            </div>
            <div className="mb-2">
              <span className="font-bold">Телефон:</span> {profile.telephone}
            </div>
            <div className="mb-2">
              <span className="font-bold">ФИО:</span> {profile.surname} {profile.firstname[0]}. {profile.patronymic[0]}.
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteProfile(profile.id)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
      <NavLink to = "/newprofile" className="bg-blue-600 hover:bg-blue-700 rounded text-white px-2 py-2 font-semibold">Создать новый профиль</NavLink>
      </div>
    </div>
  );
}

export default Profiles;
