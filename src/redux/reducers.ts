import { ISmartphone } from '../types/common.types';
import { PayloadAction, createReducer, createSelector, createSlice } from '@reduxjs/toolkit';
import { changeItems, setItemsToView } from './actions';
import { store } from './store';
import { smartphones } from '../mocks/common.mocks';

export interface ICommonReducerState {
  tableSmartphones: ISmartphone[];
  popupSmartphones: ISmartphone[];
}

const initialState: ICommonReducerState = {
  tableSmartphones: smartphones.slice(0, 3),
  popupSmartphones: smartphones.slice(3, 6),
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeItems: (state, action: PayloadAction<{ firstId: number; secondId: number }>): void => {
      console.log('changing', action.payload.firstId, 'with', action.payload.secondId);
      //@ts-ignore
      const firstSmartphone: ISmartphone = smartphones.find(
        item => item.id === action.payload.firstId
      );
      //@ts-ignore
      const secondSmartphone: ISmartphone = smartphones.find(
        item => item.id === action.payload.secondId
      );

      state.tableSmartphones = [...state.tableSmartphones].map(item => {
        if (item.id === firstSmartphone.id) {
          return secondSmartphone;
        }
        return item;
      });

      state.popupSmartphones = [...state.popupSmartphones].map(item => {
        if (item.id === secondSmartphone.id) {
          return firstSmartphone;
        }
        return item;
      });
    },
    setItemsToView: (state, action: PayloadAction<{ amount: number }>): void => {
      if (state.tableSmartphones.length === state.popupSmartphones.length) {
        if (action.payload.amount > 3) {
          state.tableSmartphones = state.popupSmartphones.slice(3, action.payload.amount);
          state.popupSmartphones = state.popupSmartphones.slice(action.payload.amount + 1, 6);
        } else {
          state.tableSmartphones = state.tableSmartphones.slice(0, action.payload.amount);
          state.popupSmartphones = state.tableSmartphones.slice(action.payload.amount + 1, 6);
        }
      } else if (state.tableSmartphones.length > state.popupSmartphones.length) {
        state.tableSmartphones = state.tableSmartphones.slice(0, action.payload.amount);
        state.popupSmartphones = state.tableSmartphones.slice(action.payload.amount + 1, 6);
      } else {
        state.tableSmartphones = state.popupSmartphones.slice(
          state.tableSmartphones.length,
          action.payload.amount
        );
        state.popupSmartphones = state.popupSmartphones.slice(action.payload.amount + 1, 6);
      }
    },
  },
});

/* builder => {
  builder
    .addCase(changeItems, (state, action: PayloadAction<{ firstId: number; secondId: number }>) => {
      console.log('changing', action.payload.firstId, 'with', action.payload.secondId);
      //@ts-ignore
      const firstSmartphone: ISmartphone = smartphones.find(
        item => item.id === action.payload.firstId
      );
      //@ts-ignore
      const secondSmartphone: ISmartphone = smartphones.find(
        item => item.id === action.payload.secondId
      );

      state.tableSmartphones = [...state.tableSmartphones].map(item => {
        if (item.id === firstSmartphone.id) {
          return secondSmartphone;
        }
        return item;
      });

      state.popupSmartphones = [...state.popupSmartphones].map(item => {
        if (item.id === secondSmartphone.id) {
          return firstSmartphone;
        }
        return item;
      });
    })
    .addCase(setItemsToView, (state, action) => {
      if (state.tableSmartphones.length === state.popupSmartphones.length) {
        console.log(1);
        if (action.payload.amount > 3) {
          console.log(2, state, state.tableSmartphones, state.popupSmartphones);
          state.tableSmartphones = state.popupSmartphones.slice(3, action.payload.amount);
          state.popupSmartphones = state.popupSmartphones.slice(action.payload.amount + 1, 6);
          console.log(
            state.tableSmartphones,
            state.popupSmartphones.slice(3, action.payload.amount),
            state.popupSmartphones,
            state.popupSmartphones.slice(action.payload.amount + 1, 6)
          );
        } else {
          console.log(3);
          state.tableSmartphones = state.tableSmartphones.slice(0, action.payload.amount);
          state.popupSmartphones = state.tableSmartphones.slice(action.payload.amount + 1, 6);
        }
      } else if (state.tableSmartphones.length > state.popupSmartphones.length) {
        console.log(4);
        state.tableSmartphones = state.tableSmartphones.slice(0, action.payload.amount);
        state.popupSmartphones = state.tableSmartphones.slice(action.payload.amount + 1, 6);
      } else {
        console.log(5);
        state.tableSmartphones = state.popupSmartphones.slice(
          state.tableSmartphones.length,
          action.payload.amount
        );
        state.popupSmartphones = state.popupSmartphones.slice(action.payload.amount + 1, 6);
      }
    }); */
export const commonReducer = commonSlice.reducer;

export const commonActions = {
  changeItems,
};

type AppState = ReturnType<typeof store.getState>;

const getCommonReducerState = (rootState: AppState): ICommonReducerState => {
  return rootState.common;
};

export const getTableSmartphonesState = createSelector(
  [getCommonReducerState],
  state => state.tableSmartphones
);

export const getPopupSmartphonesState = createSelector(
  [getCommonReducerState],
  state => state.popupSmartphones
);
