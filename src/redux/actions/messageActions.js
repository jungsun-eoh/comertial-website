import axios from 'axios';

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

export const handlTextChange = (text) => {
  return {
    type: 'UPDATE_TEXT',
    text,
  };
};

export const handlIdChange = (listing_id) => {
  return {
    type: 'UPDATE_ID',
    listing_id,
  };
};

export const submitMessage = () => (dispatch, getState) => {
  axios
    .post('/messanger/postMessage', {
      message: getState().messageReducer.text,
      listing_id: getState().messageReducer.listing_id,
    })
    .then(() => {})
    .catch((e) => console.log(e));
  dispatch(handlTextChange(''));
  dispatch(handlIdChange(''));
};
