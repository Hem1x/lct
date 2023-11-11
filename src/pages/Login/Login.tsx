import React, { useState } from 'react';
import logo from '../../assets';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/features/authSlice';
import { useLazyGetAuthQuery } from '../../store/api/api';

const Login: React.FC = () => {
  const [fio, setFio] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const dispatch = useAppDispatch();
  const [trigger] = useLazyGetAuthQuery();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await trigger({ fio, password });

    if (response.error) {
      setErrMessage('Ошибка при авторизации');
    } else if (response.data.auth === 'admin') {
      dispatch(login());
      setErrMessage('');
    } else if (response.data.auth === 'login') {
      setErrMessage('Неверный логин или пароль');
    }
  };

  return (
    <div className="w-full h-screen bg-white bg-opacity-50 flex justify-center align-middle items-center">
      <div className="sm:relative px-2 sm:px-36 sm:pt-32 sm:py-40 bg-white flex flex-col align-middle rounded-3xl sm:shadow-formShadow">
        <h1 className="text-[40px] text-center font-bold text-[#0066FF] mb-5">
          Войти
        </h1>

        <form className="flex flex-col gap-10" onSubmit={(e) => handleLogin(e)}>
          <div className="border-b border-b-[#d1d1d1] pb-3">
            <input
              className="w-full"
              type="text"
              placeholder="ФИО"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
            />
          </div>

          <div className="border-b border-b-[#d1d1d1] pb-3">
            <input
              className="w-full"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-3 rounded-lg text-white font-semibold sm:w-[300px] sm:mx-auto bg-[#0066FF] hover:bg-[#003791]">
            Войти
          </button>
        </form>

        {errMessage.length !== 0 && (
          <p className="text-center text-red-900">{errMessage}</p>
        )}
      </div>
      <img className="absolute bottom-10 right-10" src={logo} alt="logo" />
    </div>
  );
};

export default Login;
