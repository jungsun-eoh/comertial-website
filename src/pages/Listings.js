import React from 'react';
import ListingCreationForm from './../components/ListingCreationForm';
import ViewListings from './../components/ViewListings';

const Listings = ({}) => {
  return (
    <>
      <div>
        <ListingCreationForm />
      </div>
      <div className='view-listings'>
        <ViewListings filterListings={false} />
      </div>
    </>
  );
};

export default Listings;
