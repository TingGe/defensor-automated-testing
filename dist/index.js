"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const react_redux_1 = require("react-redux");
const Count_1 = tslib_1.__importDefault(require("./Count"));
const store_1 = require("./store");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(Count_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map