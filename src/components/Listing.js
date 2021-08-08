import React from "react";
import Messenger from "./Messenger";
import Messages from "./Messages";

const Listing = ({ listing, userCount, filterListings }) => {
  const [messaging, setMessaging] = React.useState(false);
  const myStyle = {
    alignSelf: "center",
    justifyContent: "center",
    width: "18rem",
  };

  return (
    <>
      <div className="card m-3 d-block" style={myStyle}>
        <div className="card-body">
          <h5 className="card-title">{listing.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{listing.type}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{listing.price}</h6>
          <p className="card-text">{listing.description}</p>
          <p>Users Viewing: {userCount}</p>
        </div>
        {!filterListings && (
          <div style={{ marginTop: 100 }}>
            <button
              className="btn btn-primary"
              onClick={() => setMessaging(!messaging)}
            >
              Message
            </button>
            <Messenger messaging={messaging} data={listing} />
          </div>
        )}
        {filterListings && <Messages listing_id={listing.id} />}
      </div>
    </>
  );
};

export default Listing;
//className="listing"
