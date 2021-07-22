import api from '../../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userAccountId: null,
  userInfo: null,
  token: {},
  tutorialLogin: null,
};

export function login(state = initialState, action) {
  switch (action.type) {
    case 'USER_TOKEN':
      try {
        AsyncStorage.setItem('TOKEN', action.payload);
      } catch (e) {
        // saving error
      }
      return {...state, token: action.payload};
    case 'USER_INFO':
      return {...state, userInfo: action.payload};
    case 'USER_LOGIN_LOADING':
      console.log('Loading...');
      return {...state, isLoading: true};
    case 'USER_LOGIN_FAIL':
      return {...state, isLoading: false};
    case 'USER_LOGIN_SUCCESS':
      return {...state, isLoading: false, isLoggedIn: true};
    case 'USER_ID':
      console.log(action.payload);
      return {
        ...state,
        userAccountId: action.payload,
      };
    case 'USER_LOGOFF':
      return {...state, isLoggedIn: false};
    case 'USER_TUTORIAL_LOGIN':
      return {...state, tutorialLogin: action.payload};
    default:
      return state;
  }
}
