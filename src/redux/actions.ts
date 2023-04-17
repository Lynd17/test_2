import { createAction } from '@reduxjs/toolkit';
import { CHANGE_ITEMS, SET_ITEMS_TO_VIEW } from './constants';

export const changeItems = createAction(
  CHANGE_ITEMS,
  function prepare(firstId: number, secondId: number) {
    return {
      payload: {
        firstId,
        secondId,
      },
    };
  }
);

export const setItemsToView = createAction(SET_ITEMS_TO_VIEW, function prepare(amount: number) {
  return {
    payload: {
      amount,
    },
  };
});
