import React from "react";

const Contacts = () => {
    return <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto text-gray-800 border-x-4 border-blue-500 mt-6 bg-blue-50 shadow-xl">
        <div className="m-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Контакты</h2>
            <p className=" m-2 text-lg">Наша команда всегда готова помочь вам с любыми вопросами, связанными с уборкой и чисткой. Если у вас есть вопросы, предложения или комментарии, не стесняйтесь связаться с нами.</p>
            <br/>
            <p className=" m-2 font-semibold text-lg">Адрес: ул. Ленина, д. 10, офис 205</p>
            <p className=" m-2 font-semibold text-lg">Телефон: +7 (495) 123-45-67</p>
            <p className=" m-2 font-semibold text-lg">Электронная почта: info@cleaningservice.com</p>
            <br/>
            <p className=" m-2 text-lg">Мы работаем ежедневно с 9:00 до 21:00 и всегда готовы ответить на ваши звонки и сообщения. Будем рады услышать вас!</p>
        </div>
    </div>



}

export default Contacts;