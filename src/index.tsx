import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "src/app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.querySelector("#page-root"));
registerServiceWorker();
