export const updateMessages = (messages) => {
  return {
    type: 'UPDATE_MESSAGES',
    messages,
  };
};

export const insertMessage = (message) => {
  console.log('inserting message');
  return {
    type: 'INSERT_MESSAGE',
    message,
  };
};

export const setUserCount = (userCount) => {
  return {
    type: 'SET_USER_COUNT',
    userCount,
  };
};

export const setUserName = (userName) => {
  return {
    type: 'SET_USER_NAME',
    userName,
  };
};

export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: 'SET_IS_LOGGED_IN',
    isLoggedIn,
  };
};
