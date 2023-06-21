# Курсовой проект: Веб-приложение клининг сервиса

Этот проект представляет собой веб-приложение для клининг сервиса, реализованное с использованием React (фронтенд) и Spring Boot (бэкенд).

## Установка и запуск

1. Установите [Node.js](https://nodejs.org/) и [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
2. Склонируйте репозиторий на свой локальный компьютер.
3. С помощью `cleaning_db.sql` создайте базу данных.
4. Перейдите в папку `frontend` и выполните команду `npm install`, чтобы установить зависимости фронтенда.
5. Перейдите в папку `backend` и выполните команду `./mvnw spring-boot:run`, чтобы запустить бэкенд приложение.
6. Откройте веб-браузер и перейдите по адресу [http://localhost:3000](http://localhost:3000), чтобы открыть фронтенд приложение.

## Структура проекта

- `frontend/` - содержит исходный код фронтенда на React.
- `backend/` - содержит исходный код бэкенда на Spring Boot.
- `cleaning_db.sql` - скрипт для создания бд (postgressql)

## Технологии
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="git" alt="git" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="html5" alt="html5" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="css3" alt="css" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" title="css3" alt="css" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="css3" alt="css" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="css3" alt="css" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/java/java-original.svg" title="css3" alt="css" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/spring/spring-original.svg" title="css3" alt="css" width="40" height="40"/>
</div>

## Функциональность

- Аутентификация с помощью JWT.
- Просмотр предоставляемых услуг.
- Создание заявки на приборку помещения.
