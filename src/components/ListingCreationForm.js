import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDescription,
  setPrice,
  setType,
  setTitle,
  setListings,
  setId,
} from "../redux/actions/listingActions";

const ListingCreationForm = () => {
  const dispatch = useDispatch();

  const description = useSelector((state) => state.listingReducer.description);
  const type = useSelector((state) => state.listingReducer.type);
  const price = useSelector((state) => state.listingReducer.price);
  const title = useSelector((state) => state.listingReducer.title);
  const id = useSelector((state) => state.listingReducer.id);
  const userName = useSelector((state) => state.userReducer.userName);

  const handleDescChange = (e) => {
    dispatch(setDescription(e.target.value));
  };
  const handleTypeChange = (e) => {
    dispatch(setType(e.target.value));
  };
  const handlePriceChange = (e) => {
    dispatch(setPrice(e.target.value));
  };
  const handleTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
    dispatch(setId(Math.random().toString(36).slice(-8)));
  };

  const handleSubmit = () => {
    axios
      .post("/listing/createListing", {
        description: description,
        type: type,
        price: price,
        title: title,
        userName: userName,
        id: id,
      })
      .catch(() => {
        console.log("/createLising error");
      });

    axios
      .get("/listing/viewListings")
      .then((res) => {
        console.log(res.data);
        dispatch(setListings(res.data));
      })
      .catch(() => {
        console.log("/viewListings error");
      });
  };
  const myStyle = {
    alignSelf: "center",
    justifyContent: "center",
    width: "18rem",
  };
  return (
    <div>
      <form style={{}}>
        <div className="form-group">
          <label className="form-label m-2">Description</label>
          <input
            style={{ width: "200px" }}
            class="form-control m-1"
            id="input-description"
            aria-describedby="emailHelp"
            onChange={handleDescChange}
            value={description}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Type</label>
          <input
            style={{ width: "200px" }}
            class="form-control m-1"
            id="input-type"
            onChange={handleTypeChange}
            value={type}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            style={{ width: "200px" }}
            class="form-control m-1"
            id="input-price"
            onChange={handlePriceChange}
            value={price}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            style={{ width: "200px" }}
            class="form-control m-1"
            id="input-title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
      </form>
      <button
        className="btn btn-primary m-2"
        id="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ListingCreationForm;

{
  /* <div>
      <p>
        Description:
        <textarea
          id="input-description"
          onChange={handleDescChange}
          value={description}
        />
      </p>
      <p>
        Type:
        <input id="input-type" onChange={handleTypeChange} value={type} />
      </p>
      <p>
        Price:
        <input id="input-price" onChange={handlePriceChange} value={price} />
      </p>
      <p>
        Title:
        <input id="input-title" onChange={handleTitleChange} value={title} />
      </p>
      <button id="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div> */
}
