import * as actions from '../Types';

const initialState = {
  notificationAllowed: null,
}

export const UserReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.NOTIFICATION_STATUS:
      return {
        ...state,
        notificationAllowed: action.payload,
      }
    default: 
      return state;
  }
}