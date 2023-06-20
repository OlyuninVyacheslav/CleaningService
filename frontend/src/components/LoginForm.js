  import * as React from 'react';
  import classNames from 'classnames';

  export default class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 'login',
        surname: '',
        firstname: '',
        patronymic: '',
        email: '',
        password: '',
        onLogin: props.onLogin,
        onRegister: props.onRegister,
      };
    }

    onChangeHandler = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({ [name]: value });
    };

    onSubmitLogin = (e) => {
      this.state.onLogin(e, this.state.email, this.state.password);
    };

    onSubmitRegister = (e) => {
      this.state.onRegister(
        e,
        this.state.surname,
        this.state.firstname,
        this.state.patronymic,
        this.state.email,
        this.state.password
      );
    };

    render() {
      return (
        <div className="flex justify-center">
          <div className="w-1/4">
            <div className="flex justify-center mb-3">
              <button
                className={classNames(
                  'py-2 px-12 rounded-tl-lg rounded-bl-lg focus:outline-none',
                  this.state.active === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                )}
                id="tab-login"
                onClick={() => this.setState({ active: 'login' })}
              >
                Вход
              </button>
              <button
                className={classNames(
                  'py-2 px-5 rounded-tr-lg rounded-br-lg focus:outline-none',
                  this.state.active === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                )}
                id="tab-register"
                onClick={() => this.setState({ active: 'register' })}
              >
                Регистрация
              </button>
            </div>

            <div className="bg-white p-4">
              <div
                className={classNames(
                  'tab-content',
                  this.state.active === 'login' ? 'block' : 'hidden'
                )}
                id="pills-login"
              >
                <form onSubmit={this.onSubmitLogin}>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="email">
                      Электронная почта
                    </label>
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="password">
                      Пароль
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none"
                  >
                    Войти
                  </button>
                </form>
              </div>

              <div
                className={classNames(
                  'tab-content',
                  this.state.active === 'register' ? 'block' : 'hidden'
                )}
                id="pills-register"
              >
                <form onSubmit={this.onSubmitRegister}>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="surname">
                      Фамилия
                    </label>
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="firstname">
                      Имя
                    </label>
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      id="patronymic"
                      name="patronymic"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="patronymic">
                      Отчество
                    </label>
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      id="register-email"
                      name="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="register-email">
                      Электронная почта
                    </label>
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      id="register-password"
                      name="password"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="register-password">
                      Пароль
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none"
                  >
                    Создать аккаунт
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
