import * as types from '../actiontype/common';

export const change_current_name = (name: string) => ({
  type: types.CHANGE_NAME,
  name
});

export const change_current_room = (room: string) => ({
  type: types.CHANGE_ROOM,
  room
});
