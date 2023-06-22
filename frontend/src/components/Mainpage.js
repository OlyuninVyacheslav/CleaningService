import React from "react";
import { NavLink } from 'react-router-dom';

const Mainpage = () => {
    return <div className="border-x-4 border-blue-500 max-w-screen-xl mx-auto mt-6">
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src={require('./pictures/main.jpg')} />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Клининг сервис</h1>
        <p className="mb-8 leading-relaxed text-lg">Мы - профессиональная команда, которая предлагает полный спектр услуг по уборке. Мы используем экологически чистые средства и оборудование, чтобы достичь оптимального результата. Наша команда состоит из ответственных профессионалов, готовых выслушать ваши пожелания и запросы. Мы стремимся к постоянному улучшению нашей работы и всегда готовы оправдать доверие наших клиентов. Обращайтесь к нам сегодня, чтобы получить бесплатную консультацию и оценку стоимости наших услуг.</p>
        <div className="flex justify-center">
          <div className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
          <NavLink to="/services">Услуги</NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
}

export default Mainpage;