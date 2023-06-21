\! chcp 1251
CREATE DATABASE cleaning_db;
\c cleaning_db;

CREATE TABLE service (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(10),
    price INT NOT NULL,
    is_single BOOLEAN,
    description TEXT
);


CREATE TABLE status_list_app (
    id SERIAL PRIMARY KEY,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE basis_list (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255)
);

CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    surname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255),
    address TEXT NOT NULL,
    telephone VARCHAR(11) NOT NULL,
    client_id INT REFERENCES client(id)
);

CREATE TABLE post_list (
    id SERIAL PRIMARY KEY,
    post VARCHAR(255) NOT NULL
);

CREATE TABLE status_list_brigade (
    id SERIAL PRIMARY KEY,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE brigade (
    id SERIAL PRIMARY KEY,
    status_id INT REFERENCES status_list_brigade(id)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    surname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255),
    dob DATE NOT NULL,
    telephone VARCHAR(11) NOT NULL,
    post_id INT REFERENCES post_list(id),
    brigade_id INT REFERENCES brigade(id),
    password VARCHAR(255)
);

CREATE TABLE type_list (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE app (
    id SERIAL PRIMARY KEY,
    address TEXT,
    telephone_cl VARCHAR(11),
    surname_cl VARCHAR(255),
    firstname_cl VARCHAR(255),
    patronymic_cl VARCHAR(255),
    client_id INT REFERENCES client(id),
    date_of_sub TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_of_comp TIMESTAMP,
    status_id INT REFERENCES status_list_app(id) DEFAULT 1,
    basis_id INT REFERENCES basis_list(id),
    brigade_id INT REFERENCES brigade(id) DEFAULT NULL,
    type_id INT REFERENCES type_list(id),
    square INT,
    notes TEXT
);

CREATE TABLE app_content (
    id SERIAL PRIMARY KEY,
    service_id INT REFERENCES service(id),
    app_id INT REFERENCES app(id),
    count INTEGER
);

  INSERT INTO type_list (name,price) 
  VALUES 
  ('Генеральная', 88),
  ('После ремонта', 103),
  ('Уборка офиса', 80),
  ('Уборка перед заселением/выселением', 95),
  ('Поддерживающая', 75);

  INSERT INTO basis_list (name) VALUES
  ('Одноразовая'), ('Еженедельная'), ('Ежемесячная');

 INSERT INTO status_list_app(status) VALUES ('В обработке'), ('Запланирована'), ('В работе'), ('Выполнена'), ('Просрочена');

 INSERT INTO service(name,unit,price,is_single,description) VALUES
 ('Мойка окон', 'руб. / шт.', 500, FALSE, 'Цена из расчета за стандартное окно 2 створки, целиком с двух сторон'),
 ('Стирка', 'руб. / кг.', 250, FALSE, 'Цена за стирку одного килограмма белья/штор/одежды'),
 ('Холодильник','руб. / шт.', 500, FALSE, 'Дезинфекция и удаление запахов'),
 ('Духовка','руб. / шт.', 400, FALSE, 'Дезинфекция и удаление запахов'),
 ('Глажка белья', 'руб. / кг', 300, FALSE, 'Цена из расчета за глажку одного килограмма белья'),
 ('Мытье люстры', 'руб. / шт', 350, FALSE, 'Мойка люстр на потолке'),
 ('Парогенератор', 'руб.', 700, TRUE, 'Очистка межплиточных швов, дезинфекция сантехники, удаление трудных пятен');

 INSERT INTO post_list(post) VALUES ('Исполнитель'),
 ('Планировщик'),
 ('Менеджер');