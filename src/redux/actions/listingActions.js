export const setDescription = (description) => ({
  type: 'LISTING_SET_DESCRIPTION',
  description,
});

export const setType = (_type) => ({
  type: 'LISTING_SET_TYPE',
  _type,
});

export const setPrice = (price) => ({
  type: 'LISTING_SET_PRICE',
  price,
});

export const setTitle = (title) => ({
  type: 'LISTING_SET_TITLE',
  title,
});

export const setId = (id) => ({
  type: 'LISTING_SET_ID',
  id,
});

export const setListings = (listings) => ({
  type: 'LISTING_SET_LISTINGS',
  listings,
});
