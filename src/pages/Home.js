import React from "react";
import Messages from "../components/Messages";
import ViewListings from "../components/ViewListings";

const Home = ({}) => {
  return (
    <>
      <div className="view-listings">
        <h3> Your Listings </h3>
        <ViewListings filterListings={true} />
      </div>
    </>
  );
};

export default Home;
