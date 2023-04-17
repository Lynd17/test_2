import React from 'react';
import './style.css';
import User from '../../images/user.svg';

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="header">
      <h5>Каталог</h5>
      <div className="header-navbar">
        <span className="uppercase">Сравнение</span>
        <span>Личный кабинет</span>
        <img src={User} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
