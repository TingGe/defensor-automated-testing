# ava-testing

一个针对 TypScript 源码的 React Redux 项目的模版项目。

- 采用  React 和 TypeScript；
- 测试包括：单元测试、覆盖率测试、接入集成测试服务、e2e 测试和 watch 模式；
- Redux 做状态管理。

## 测试

1. React Redux 测试：typescript + ava + enzyme(sinon、redux-mock-store) 组合
2. 覆盖率：nyc
3. 集成测试： 


### 单元：React  + Redux

支持 watch 模式；原子测试

1. actions 测试
2. reducer 测试
3. select 测试
4. React + Redux 测试
5. 输出报告

### 覆盖率

- nyc

### E2E 测试

UI Recorder 或 Nightwatch

## 工具

- Mocha + Chai
- Jest
- AVA



| 测试工具类型                      | 选型                                     | 同类                                       |      |
| --------------------------- | -------------------------------------- | ---------------------------------------- | ---- |
| **environment**             |                                        | Jest、  Wallaby.js                        |      |
| **testing structure**       |                                        | [cucumber-js](https://github.com/cucumber/cucumber-js) |      |
| **assertions functions**    |                                        | [Unexpected](https://github.com/unexpectedjs/unexpected)、Chai |      |
| **display, and watch**      |                                        | Jest                                     |      |
| **snapshots**               | AVA                                    |                                          | 1    |
| **mocks, spies, and stubs** | enzyme                                 | [testdouble.js](https://github.com/testdouble/testdouble.js) | 1    |
| **code coverage**           | nyc                                    | [istanbul](https://github.com/gotwarlost/istanbul) | 1    |
| e2e                         | [Nightwatch](http://nightwatchjs.org/) | [Protractor](http://www.protractortest.org/), [Casper](http://casperjs.org/)，testcafe | 0.5  |
|                             |                                        |                                          |      |
| runner                      |                                        | [DalekJS](https://github.com/dalekjs)、UI Recorder |      |
| 模拟浏览器 dom                   | JsDom                                  |                                          | 1    |

## 踩过的坑

- package.json 中包依赖包版本锁定管理
- ignore-styles 忽略

### API Docs

- AVA: https://github.com/avajs/ava#api
- Enzyme:  https://github.com/airbnb/enzyme/tree/master/docs/api
- Test Renderer: https://doc.react-china.org/docs/test-renderer.html

## 参考

- [别再加端到端集成测试了，快换契约测试吧](http://insights.thoughtworks.cn/contract-test/)
- [从工程化角度讨论如何快速构建可靠React组件](https://github.com/lcxfs1991/blog/issues/18)
- [How to Test a React and Redux Application ](https://semaphoreci.com/community/tutorials/getting-started-with-create-react-app-and-ava)
- [How to prevent “Property '…' does not exist on type 'Global'” with jsdom and typescript?](https://stackoverflow.com/questions/40743131/how-to-prevent-property-does-not-exist-on-type-global-with-jsdom-and-t)
- [Using enzyme with JSDOM](http://airbnb.io/enzyme/docs/guides/jsdom.html)
- [Antd Pro UI Test](https://pro.ant.design/docs/ui-test#单元测试)
- [Automated React Component Testing with Jest](https://www.distelli.com/docs/tutorials/test-your-react-component-with-jest/)



## 重点解答

疑问：

1. 常用组合和现在组合优缺点；
2. 各组合适用的应用场景；
3. 测试的开发体验。

### 未来的可能

1. 更好的开发体验
2. 低成本的测试用例的创建和维护方案