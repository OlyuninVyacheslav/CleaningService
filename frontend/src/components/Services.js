import React, { useEffect, useState } from 'react';
import { request } from '../axios_helper';
import { NavLink } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/ru';

function Services() {
  const [types, setTypes] = useState([]);
  const [basis, setBasis] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBasis, setSelectedBasis] = useState(null);
  const [area, setArea] = useState(30);
  const [services, setServices] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [comment, setComment] = useState('');
  const [cleaningDate, setCleaningDate] = useState(moment().add(1, 'week'));

  const currentDate = moment();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Получение данных из состояния компонента
    const profileId = document.querySelector('select[name="profile"]').value;
    const profile = profiles.find(profile => profile.id === parseInt(profileId));
  
    const type = selectedType.id;
    const square = area;
    
    const basis = selectedBasis.id;
  
    const dateOfComp = cleaningDate.format('YYYY-MM-DD HH:mm');
    
    const notes = comment;
  
    // Формирование объекта заявки
    const requestPayload = {
      app: {
          address: profile.address,
          telephone: profile.telephone,
          surname: profile.surname,
          firstname: profile.firstname,
          patronymic: profile.patronymic,
          square: square,
          dateOfComp: dateOfComp,
          notes: notes
      },
      type_id: type,
      basis_id: basis
  };
  
    // Отправка заявки на сервер
    request('post', '/apps', requestPayload)
      .then(response => {
        // Заявка успешно добавлена, выполните необходимые действия (например, отобразите сообщение об успехе)
      })
      .catch(error => {
        // Произошла ошибка при добавлении заявки, обработайте ее соответствующим образом (например, отобразите сообщение об ошибке)
        console.error(error);
        console.log(profile.address);
        console.log(type);
        console.log(square);
        console.log(basis);
        console.log(dateOfComp);
        console.log(notes);
      });
  };
  

  useEffect(() => {
    request('get', '/types')
      .then(response => {
        setTypes(response.data);
        setSelectedType(response.data[0]);
      })
      .catch(error => console.error(error));

      request('get', '/basis')
      .then(response => {
        setBasis(response.data);
        setSelectedBasis(response.data[0]);
      })
      .catch(error => console.error(error));

    setArea(30); // Установка значения площади по умолчанию равным 30

    request('get', '/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => console.error(error));

    request('get', '/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleTypeChange = (event) => {
    const typeId = event.target.value;
    const selected = types.find(type => type.id === parseInt(typeId));
    setSelectedType(selected);
  };

  const handleBasisChange = (event) => {
    const basisId = event.target.value;
    const selected = basis.find(basis => basis.id === parseInt(basisId));
    setSelectedBasis(selected);
  };

  const handleAreaChange = (event) => {
    const areaValue = event.target.value;
    setArea(areaValue);
  };

  const handleServiceCountChange = (event, serviceId) => {
    const countValue = event.target.value;
    setServices(prevServices => {
      return prevServices.map(service => {
        if (service.id === serviceId) {
          return { ...service, count: countValue };
        }
        return service;
      });
    });
  };

  const handleCleaningDateChange = (date) => {
    setCleaningDate(date);
  };

  const handleCommentChange = (event) => {
    const commentValue = event.target.value;
    setComment(commentValue);
  };

  const calculatePrice = () => {
    let totalPrice = 0;
    if (selectedType && area > 0) {
      totalPrice += selectedType.price * area;
    }
    services.forEach(service => {
      const servicePrice = service.price || 0;
      const serviceCount = service.count || 0;
      totalPrice += servicePrice * serviceCount;
    });
    return totalPrice;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-6 border-x-4 border-blue-500 text-gray-800">
      <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-6 text-center">Клининговые услуги</h1>
      <div className="flex">
        <div className="w-2/3 pr-4 mr-12">
          <div className="border-b-4 border-blue-500">
          <div className="flex items-center">
            <label className="mr-2 w-36">Профиль:</label>
            <select
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1" name="profile"
            >
              {profiles.map(profile => (
                <option key={profile.id} value={profile.id}>
                  {profile.address} +{profile.telephone} {profile.surname} {profile.firstname[0]}. {profile.patronymic[0]}.
                </option>
              ))}
            </select>
          </div>
          <NavLink to="/newprofile" className="text-blue-700 border-b border-blue-700 hover:font-semibold mb-4">Создать новый профиль</NavLink>
          <div className="flex items-center mb-4 mt-4">
          <label className="mr-2 w-36">Тип уборки:</label>
          <select
            className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 mr-4"
            onChange={handleTypeChange}
          >
            {types.map(type => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2 w-36">Площадь:</label>
            <input
              type="number"
              value={area}
              onChange={handleAreaChange}
              min={30}
              max={500}
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
            />
            <span className="ml-2">кв. м.</span>
          </div>
          <div className="flex items-center mb-4">
          <label className="mr-2 w-36">Основа:</label>
          <select
            className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 mr-4"
            onChange={handleBasisChange}
          >
            {basis.map(basis => (
              <option key={basis.id} value={basis.id}>
                {basis.name}
              </option>
            ))}
          </select>
          </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Дополнительные услуги</h2>
            <div className="space-y-2 text-base">
              {services.map(service => (
                <div key={service.id} className="border-b-2 border-blue-400 p-2 flex items-center">
                  <p className="font-bold text-gray-700 w-1/3">{service.name}</p>
                  <p className="mr-1">{service.price}</p>
                  <p className="w-1/3">{service.unit}</p>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={service.count || 0}
                    onChange={event => handleServiceCountChange(event, service.id)}
                    className="focus:outline-blue-600 border border-blue-500 px-1 rounded w/13"
                  />
                  <span className="ml-auto rounded-full px-2 text-white bg-blue-600"  data-hint={service.description}>?</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/3 p-2 px-1">
          {selectedType && (
            <div className="flex border-2 border-green-500 shadow-2xl rounded p-4 -mt-2">
              <p className="font-bold text-gray-800 text-xl mb-2 mr-2">Итого к оплате:</p>
              <p className="font-bold text-blue-600 text-xl ml-auto">{calculatePrice()} руб.</p>
            </div>
          )}
          <div className="mt-6 flex">
            <label className="mr-2 mt-1 w-28">Дата уборки:</label>
            <Datetime
              value={cleaningDate}
              onChange={handleCleaningDateChange}
              inputProps={{ className: 'border border-blue-500 focus:outline-blue-600 rounded px-4 py-1 w-72' }}
              dateFormat="DD.MM.YYYY"
              timeFormat="HH:mm"
              locale="ru"
              isValidDate={(current) => current.isSameOrAfter(currentDate, 'day')} // Ограничение выбора даты
            />
          </div>
          <div className="mt-6 flex">
            <label className="mr-2 w-28">Комментарий:</label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              className="border border-blue-500 focus:outline-blue-600 rounded px-4 py-2 resize-none flex-1"
              rows={4}
            />
          </div>
          <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded mt-4 text-xl shadow-xl"
            >
              Заказать
            </button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Services;