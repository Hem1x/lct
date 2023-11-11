import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const { pathname } = useLocation();

  const navigationList = [
    {
      text: 'Добавить отделение',
      img: 'add-task.png',
      link: '/add-deparment',
    },
    {
      text: 'Задачи команды',
      img: 'task-manager.png',
      link: '/task-manager',
    },
    { text: 'Аналитика', img: 'analitika.png', link: '/analytics' },
    { text: 'Отделения', img: 'departament.png', link: '/departments' },
  ];

  return (
    <nav>
      {navigationList.map((el) => (
        <div className="flex items-center py-2" key={el.text}>
          <img
            key={el.text}
            className="mr-3"
            src={require('../../assets/' + el.img)}
            alt={el.text}
          />
          <NavLink
            to={el.link}
            className="text-base"
            style={{ fontWeight: pathname === el.link ? '700' : '400' }}>
            {el.text}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
