import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import store from "./Redux/store";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

import { Provider } from "react-redux";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Root store={store} />
      </BrowserRouter>
    </Provider>
  </div>,

  document.getElementById("root")
);
