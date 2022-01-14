import * as types from '../actiontype/common';

const nameInitialState = {
  name: '',
  room: ''
};
export const common = (state = nameInitialState, action: any) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return { ...state, ['name']: action.name };
    case types.CHANGE_ROOM:
      return { ...state, ['room']: action.room };
    default:
      return state;
  }
};
