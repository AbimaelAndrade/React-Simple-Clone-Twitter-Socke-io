import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Global from "./styles/settings";
import Reset from "./styles/generic";
import Base from "./styles/base";

ReactDOM.render(
    <Fragment>
      <Global.Colors />
      <Global.Size />
      <Reset />
      <Base />
      <App />
    </Fragment>,
    document.getElementById("root")
  );
