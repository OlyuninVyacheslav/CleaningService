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
        <div className="flex justify-center mt-12">
          <div className="w-1/4 border-x-4 border-blue-500">
            <div className="flex justify-center mb-3">
              <button
                className={classNames(
                  'py-2 px-12 rounded-tl-lg rounded-bl-lg focus:outline-none',
                  this.state.active === 'login' ? 'bg-blue-600 hover:bg-blue-800 text-white font-semibold' : 'bg-blue-200 hover:bg-blue-400 font-semibold'
                )}
                id="tab-login"
                onClick={() => this.setState({ active: 'login' })}
              >
                Вход
              </button>
              <button
                className={classNames(
                  'py-2 px-5 rounded-tr-lg rounded-br-lg focus:outline-none',
                  this.state.active === 'register' ? 'bg-blue-600 hover:bg-blue-800 text-white font-semibold' : 'bg-blue-200 hover:bg-blue-400 font-semibold'
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
                      className="w-full border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
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
                      className="w-full border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="password">
                      Пароль
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
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
                      className="w-full border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
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
                      className="w-full border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
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
                      className="w-full border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
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
                      className="w-full border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
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
                      className="w-full border border-blue-500 focus:outline-blue-600 rounded px-4 py-1"
                      onChange={this.onChangeHandler}
                    />
                    <label className="block text-sm text-gray-700" htmlFor="register-password">
                      Пароль
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
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
