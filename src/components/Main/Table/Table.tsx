import React, { useState, useEffect, useMemo } from 'react';
import arrow from '../../../images/arrow.svg';
import './style.css';
import Popup from './Popup/Popup';
import { ISmartphone, ITableParam } from '../../../types/common.types';
import { useSelector, useDispatch } from 'react-redux';
import { getTableSmartphonesState } from '../../../redux/reducers';
import { paramsToView } from '../../../mocks/common.mocks';
import { parseValueByParam } from '../../../utils/table';

interface ITable {}

const Table: React.FC<ITable> = () => {
  const dispatch = useDispatch();
  const smartphones = useSelector(getTableSmartphonesState);

  useEffect(() => {
    console.log('smartphones', smartphones);
  }, [smartphones]);

  const [data, setData] = useState<ISmartphone[]>(smartphones);
  const [itemToChange, setItemToChange] = useState<number | null>(null);
  const [isShowDifferences, setIsShowDifferences] = useState<boolean>(false);

  const onClickShow = () => setIsShowDifferences(!isShowDifferences);
  const onClickArrow = (id: number) => setItemToChange(id);

  useEffect(() => {
    setData(smartphones);
  }, [smartphones]);

  /* const showedDifferenceData = useMemo(() => {
    let newData = [...data];

    paramsToView.forEach((param: ITableParam) => {
      newData.filter(
        (tag, index, array) =>
          array.findIndex(
            t => t[param.key as keyof ISmartphone] === tag[param.key as keyof ISmartphone]
          ) === index
      );
    });

    return newData;
  }, [data]);

  useEffect(
    () => console.log(isShowDifferences, showedDifferenceData),
    [isShowDifferences, showedDifferenceData]
  ); */

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <div className="table-header_button" onClick={onClickShow}>
              <input
                type="checkbox"
                id="isShowDifferences"
                name="isShowDifferences"
                checked={isShowDifferences}
              />
              <label htmlFor="isShowDifferences">Показать различия:</label>
            </div>
          </th>
          {data.map((item: ISmartphone) => (
            <th className="table-header-cell" key={item.id}>
              <div className="table-header-cell_item">
                <img className="table-header-cell_item-image" src={item.imageUrl} alt={item.name} />
                {smartphones.length < 6 && (
                  <img
                    className="table-header-cell_item-arrow"
                    src={arrow}
                    alt="arrow"
                    onClick={() => onClickArrow(item.id)}
                  />
                )}
                {itemToChange === item.id && (
                  <Popup setItemToChange={setItemToChange} itemToChange={itemToChange} />
                )}
              </div>

              <p>{item.name}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paramsToView.map((param: ITableParam, index: number) => (
          <tr key={index}>
            <td>
              <div className="table-body-cell">{param.label}</div>
            </td>
            {data.map((item: ISmartphone) => (
              <td key={item.id}>
                {/*  //@ts-ignore */}
                <div className="table-body-cell">
                  {parseValueByParam(param.key, item[param.key as keyof ISmartphone])}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
