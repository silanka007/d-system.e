import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@d-system/react";

import "@d-system/scss/lib/button.css"

ReactDOM.render(
  <div>
    <Button label="test button" />
  </div>,
  document.querySelector("#root")
);
