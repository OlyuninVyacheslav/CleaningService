import React, { useEffect, useState } from 'react';
import { request } from '../axios_helper';

const ClientAppTable = () => {
  const [apps, setApps] = useState([]);

  const formatDate = (date) => {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
  };

  useEffect(() => {
    // Получите заявки клиента с помощью запроса к серверу
    const fetchApps = async () => {
      try {
        const response = await request('get', '/apps');
        setApps(response.data);
        console.log(apps);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApps();
  }, );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden text-gray-800 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Заявки клиента</h2>
      <table className="w-full">
        <thead>
          <tr className="text-center bg-blue-600 text-white">
            <th className="py-2 px-4">Дата подачи</th>
            <th className="py-2 px-4">Дата выполнения</th>
            <th className="py-2 px-4">Адрес</th>
            <th className="py-2 px-4">ФИО</th>
            <th className="py-2 px-4">Статус</th>
            <th className="py-2 px-4">Тип</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => (
            <tr key={app.id} className="border-t text-center">
              <td className="py-2 px-4">{formatDate(app.dateOfSubmission)}</td>
              <td className="py-2 px-4">{formatDate(app.dateOfCompletion)}</td>
              <td className="py-2 px-4">{app.address}</td>
              <td className="py-2 px-4">{app.surname} {app.firstname[0]}. {app.patronymic[0]}.</td>
              <td className="py-2 px-4">{app.status}</td>
              <td className="py-2 px-4">{app.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientAppTable;
