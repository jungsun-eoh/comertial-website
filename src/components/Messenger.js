import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handlIdChange,
  handlTextChange,
  submitMessage,
} from "../redux/actions/messageActions";

const Messenger = ({ messaging, data }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.messageReducer.text);

  const handleSubmit = () => {
    dispatch(handlIdChange(data.id));
    dispatch(submitMessage());
  };

  return (
    <div>
      {messaging && (
        <div>
          <input
            type="text"
            vlaue={text}
            onChange={(e) => dispatch(handlTextChange(e.target.value))}
          />
          <div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messenger;
