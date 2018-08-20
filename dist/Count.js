"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("Count.scss");
const React = tslib_1.__importStar(require("react"));
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const mapState = (state) => ({
    dolphins: state.dolphins,
    sharks: store_1.select.sharks.total(state),
});
const mapDispatch = (dispatch) => ({
    incrementDolphins: dispatch.dolphins.increment,
    incrementDolphinsAsync: dispatch.dolphins.incrementAsync,
    incrementSharks: () => dispatch.sharks.increment(1),
    incrementSharksAsync: () => dispatch.sharks.incrementAsync(1),
    incrementSharksAsync2: () => dispatch({ type: 'sharks/incrementAsync', payload: 2 }),
});
const Count = props => (React.createElement("div", { className: "count-container" },
    React.createElement("div", null,
        React.createElement("h3", null, "Dolphins"),
        React.createElement("h1", null, props.dolphins),
        React.createElement("button", { onClick: props.incrementDolphins }, "+1"),
        React.createElement("button", { onClick: props.incrementDolphinsAsync }, "Async +1")),
    React.createElement("div", null,
        React.createElement("h3", null, "Sharks"),
        React.createElement("h1", null, props.sharks),
        React.createElement("button", { onClick: props.incrementSharks }, "+1"),
        React.createElement("button", { onClick: props.incrementSharksAsync }, "Async +1"),
        React.createElement("button", { onClick: props.incrementSharksAsync2 }, "Async +2")),
    React.createElement("p", null, "Using Rematch Models")));
exports.default = react_redux_1.connect(mapState, mapDispatch)(Count);
//# sourceMappingURL=Count.js.map