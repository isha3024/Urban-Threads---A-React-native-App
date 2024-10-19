import AsyncStorage from '@react-native-async-storage/async-storage';

import {store} from '../../redux';
import * as actions from '../../redux/Types';
import {getCredentials} from '../../utils';
import HttpCalls from './HttpCalls';
import {headersData} from './Services';

// INFO: all APIs added here

// const getToken = async () => {
//   try {
//     let res = await getCredentials();
//     if (res) {
//       return res?.token;
//     } else {
//       await AsyncStorage.removeItem('isLoginIndex');
//       await store.dispatch({
//         type: actions.USER_LOGOUT,
//       });
//       await store.dispatch({
//         type: actions.USER_LOGIN,
//         payload: {
//           userLoginResponse: null,
//         },
//       });
//       return null;
//     }
//   } catch (e) {
//     console.log('token error', e);
//   }
// };

