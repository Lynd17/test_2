import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './style.css';
import Table from './Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsToView as setItemsToViewAction } from './../../redux/actions';
import { getTableSmartphonesState } from '../../redux/reducers';

interface IMain {}

const Main: React.FC<IMain> = () => {
  const smartphones = useSelector(getTableSmartphonesState);
  const dispatch = useDispatch();
  const buttonsLables: number[] = [2, 3, 4, 5, 6];

  const onClickButton = (id: number) => {
    dispatch(setItemsToViewAction(id));
  };

  return (
    <div className="main-wrapper">
      <div className="main-title">
        <h1>Смартфоны</h1>
        <div className="main-title_options">
          <span>Отобразить товары:</span>
          {buttonsLables.map(item => (
            <a
              className={classnames(
                'main-title_view-items-button',
                smartphones?.length === item && 'active'
              )}
              onClick={() => onClickButton(item)}
              key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Main;
