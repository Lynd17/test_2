import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import doubleArrow from '../../../../images/double-arrow.svg';
import { commonActions, getPopupSmartphonesState } from '../../../../redux/reducers';
import { changeItems } from '../../../../redux/actions';

interface IPopup {
  setItemToChange: React.Dispatch<React.SetStateAction<number | null>>;
  itemToChange: number;
}

const Popup: React.FC<IPopup> = ({ setItemToChange, itemToChange }) => {
  const dispatch = useDispatch();
  const smartphones = useSelector(getPopupSmartphonesState);
  const popupRef = useRef<HTMLInputElement>(null);
  const [dataToView, setDatatoView] = useState(smartphones);
  const [seacrh, setSearch] = useState<string>('');

  useEffect(() => {
    setDatatoView(smartphones);
  }, [smartphones]);

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;

    setSearch(newValue);
  };

  const onKeyUp = (event: any) => {
    if (popupRef.current && event.key === 'Escape') {
      setItemToChange(null);
    }
  };

  const onPopupClick = (event: any) => {
    /* if (popupRef.current !== event.target) {
      event.preventDefault();

      setItemToChange(null);
    } */
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    if (seacrh && seacrh.length > 0) {
      const filteredData = smartphones.filter(item =>
        item.name.toLowerCase().includes(seacrh.toLowerCase())
      );

      setDatatoView(filteredData);
    } else {
      setDatatoView(smartphones);
    }
  }, [seacrh]);

  const onClickChangeItems = (firstId: number, secondId: number) => {
    dispatch(commonActions.changeItems(firstId, secondId));
  };

  return (
    <div className="popup-wrapper" ref={popupRef} onMouseDown={onPopupClick}>
      {smartphones.length > 2 && (
        <input
          type="text"
          className="popup-search"
          placeholder="Поиск"
          value={seacrh}
          onChange={onChangeHandle}
        />
      )}
      {dataToView.map(item => (
        <div className="popup-item" key={item.id}>
          <img
            src={doubleArrow}
            alt="double arrow"
            className="popup-item_arrow"
            onClick={() => onClickChangeItems(item.id, itemToChange)}
          />
          <img src={item.imageUrl} alt="phone" className="popup-item_phone" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Popup;
