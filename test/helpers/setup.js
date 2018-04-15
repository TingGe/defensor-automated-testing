/**
 * @author TingGe<505253293@163.com>
 * @description 所有测试文件统一的初始化入口，在 package.json 中配置，放在 helpers 目录下
 * 是避免 ava 把这些文件当做 spec 执行
 */
const enzyme = require("enzyme");
const configure = enzyme.configure;
const Adapter = require("enzyme-adapter-react-16");
const path = require("path");
require("jsdom-global")();

// 解决引入 scss 和 css 导致报错的问题
const Module = require("module");
const prevRequire = Module.prototype.require;
Module.prototype.require = function(requirePath) {
  if (
    requirePath &&
    (requirePath.indexOf(".scss") > -1 || requirePath.indexOf(".css") > -1)
  ) {
    return "";
  }

  if (requirePath && requirePath.indexOf("src/") === 0) {
    return prevRequire.call(this, path.resolve("./built/" + requirePath));
  }
  return prevRequire.call(this, requirePath);
};

configure({ adapter: new Adapter() });
