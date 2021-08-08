import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateMessages } from "../redux/actions/messageActions";
import "../App.css";

const Message = ({ data }) => <div>{data}</div>;

const Messages = ({ listing_id }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageReducer.messages);

  React.useEffect(() => {
    axios
      .get("/messanger/getMessages")
      .then((res) => {
        dispatch(updateMessages(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [messages]);

  return (
    <div className="App">
      <div>
        <h5>Listing Messages</h5>
        <div className="message-area">
          {messages.map((message, i) => (
            <div>
              {listing_id === message.listing_id && (
                <Message key={i} data={message.message} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
