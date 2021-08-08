import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setListings } from "../redux/actions/listingActions";
import Listing from "./Listing";

const ViewListings = ({ filterListings }) => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listingReducer.listings);
  const userCount = useSelector((state) => state.userReducer.userCount);
  const userName = useSelector((state) => state.userReducer.userName);

  React.useEffect(() => {
    axios
      .get("/listing/viewListings")
      .then((res) => {
        dispatch(setListings(res.data));
      })
      .catch(() => {
        console.log("/viewListings error");
      });
  }, [listings]);

  return (
    <>
      <div>
        {!filterListings && (
          <div>
            {listings.map((listing) => (
              <Listing
                key={listing.id}
                listing={listing}
                userCount={userCount}
                filterListings={filterListings}
              />
            ))}
          </div>
        )}
        <div>
          {filterListings && (
            <div>
              {listings.map((listing) => (
                <div>
                  {userName === listing.userName && (
                    <Listing
                      key={listing.id}
                      listing={listing}
                      userCount={userCount}
                      filterListings={filterListings}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewListings;
