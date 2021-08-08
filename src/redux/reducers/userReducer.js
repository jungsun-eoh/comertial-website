const INITIAL_STATE = {
  messages: [],
  userName: '',
  isLoggedIn: false,
  userCount: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_COUNT':
      return {
        ...state,
        userCount: action.userCount,
      };
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.userName,
      };
    case 'SET_IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case 'INSERT_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};

export default userReducer;
