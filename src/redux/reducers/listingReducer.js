const INITIAL_STATE = {
  description: '',
  type: '',
  price: '',
  title: '',
  id: '',
  listings: [],
};

const listingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LISTING_SET_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    case 'LISTING_SET_TYPE':
      return {
        ...state,
        type: action._type,
      };
    case 'LISTING_SET_PRICE':
      return {
        ...state,
        price: action.price,
      };
    case 'LISTING_SET_TITLE':
      return {
        ...state,
        title: action.title,
      };
    case 'LISTING_SET_ID':
      return {
        ...state,
        id: action.id,
      };
    case 'LISTING_SET_LISTINGS':
      return {
        ...state,
        listings: [...action.listings],
      };
    default:
      return state;
  }
};

export default listingReducer;
