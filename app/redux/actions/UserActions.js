import * as actions from '../Types';

export const setPreferedNotificationPermission = (status) => {
  return {
    type: actions.NOTIFICATION_STATUS,
    payload: status,
  }
}