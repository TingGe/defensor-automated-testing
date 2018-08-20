"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@rematch/core");
const select_1 = tslib_1.__importStar(require("@rematch/select"));
const models = tslib_1.__importStar(require("./models"));
exports.models = models;
exports.select = select_1.getSelect();
exports.store = core_1.init({
    plugins: [select_1.default()],
    models,
});
//# sourceMappingURL=store.js.map