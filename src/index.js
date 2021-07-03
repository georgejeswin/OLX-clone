import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./store/Context";
import Context from "./store/Context";
import firebase from "./firebase/config";
import Post from "./store/PostContext";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <Post>
        <App />
      </Post>
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
