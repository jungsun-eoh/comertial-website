import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Authenticate from "./pages/Authenticate";
import Navbar from "./components/Navbar";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./redux/reducers/messageReducer";
import listingReducer from "./redux/reducers/listingReducer";
import userReducer from "./redux/reducers/userReducer";
import { setUserCount } from "./redux/actions/userActions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const rootReducer = combineReducers({
  messageReducer,
  listingReducer,
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

let host =
  window.location.host.split(":")[0] +
  (window.location.port && `:${window.location.port}`);
console.log(host);
let webSocket;

if (host.includes("localhost")) {
  webSocket = new WebSocket("ws://localhost:4004");
} else {
  webSocket = new WebSocket("ws://" + host + "/websocket");
}

webSocket.onmessage = (message) => {
  const data = JSON.parse(message.data);
  console.log(data);
  switch (data.type) {
    case "SET_USER_COUNT":
      store.dispatch(setUserCount(data.count));
  }
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/listings">
          <Listings />
        </Route>
        <Route path="/authenticate">
          <Authenticate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
