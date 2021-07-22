import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userPolicies: null,
  selectedPolicie: null,
};

export function policies(state = initialState, action) {
  switch (action.type) {
    case 'USER_POLICIES':
      console.log(action.payload);
      return {
        ...state,
        userPolicies: action.payload,
      };
      case 'USER_POLICIES_SELECTED':
        console.log(action.payload);
        return {
          ...state,
          selectedPolicie: action.payload,
        };
    default:
      return state;
  }
}


