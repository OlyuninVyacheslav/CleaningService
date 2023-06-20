import React from "react";
import { NavLink } from 'react-router-dom';

const Mainpage = () => {
    return <div className="border-x-4 border-blue-500 max-w-screen-xl mx-auto mt-6">
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1357587214/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%8B-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BB%D1%8E%D0%B4%D0%B8-%D0%BF%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81%D1%8F%D1%82-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D1%80%D0%B0%D1%8E%D1%82-%D0%BF%D1%8B%D0%BB%D1%8C-%D0%B8-%D0%BF%D0%BE%D0%B4%D0%BC%D0%B5%D1%82%D0%B0%D1%8E%D1%82-%D0%BF%D0%BE%D0%BB.jpg?s=612x612&w=0&k=20&c=l61AFPOQK3K2C-M2Ifrye3CXDRHRK3Y3Lqkoq6o73UU="/>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Клининг сервис</h1>
        <p className="mb-8 leading-relaxed text-lg">Мы - профессиональная команда, которая предлагает полный спектр услуг по уборке. Мы используем экологически чистые средства и оборудование, чтобы достичь оптимального результата. Наша команда состоит из ответственных профессионалов, готовых выслушать ваши пожелания и запросы. Мы стремимся к постоянному улучшению нашей работы и всегда готовы оправдать доверие наших клиентов. Обращайтесь к нам сегодня, чтобы получить бесплатную консультацию и оценку стоимости наших услуг.</p>
        <div className="flex justify-center">
          <a href="/services" className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">Услуги</a>
        </div>
      </div>
    </div>
  </section>
  </div>
}

export default Mainpage;