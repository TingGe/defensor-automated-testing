# ava-testing

> 最佳适用于 `TypeScript + Scss/Less + React + Redux +  React Dom + React Router + React Thunk` 技术栈的前端。

一个针对 TypScript 源码的 React Redux 项目的模版项目。

- 采用  React 和 TypeScript；
- 测试包括：单元测试、覆盖率测试、接入集成测试服务、e2e 测试和 watch 模式；
- Redux 做状态管理。

## 测试

1. React Redux 测试：typescript + ava + enzyme(sinon、redux-mock-store) 组合
2. 覆盖率：nyc
3. 集成测试： UI Recorder 或 Nightwatch


### 组件：React  + Redux

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

## 对比的一些工具

- AVA： 相对于 Mocha 执行更快，测试环境隔离、支持原子测试；相对于 Jest 组合更加灵活
- Mocha + Chai：相对较为成熟
- Jest：[Create React App](https://github.com/facebookincubator/create-react-app) 、 [Microsoft/TypeScript-React-Starter](Microsoft/TypeScript-React-Starter) 和 [Ant Design](https://github.com/ant-design/ant-design-pro) 中内置的推荐方案，是个一体化方案



| 测试工具类型                                   | 选型                                       | 同类                                       |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| **test runner**,**snapshots**,**display, and watch** | AVA                                      | Jest, Wallaby.js                         |
| **assertions functions**                 | enzyme                                   | [Unexpected](https://github.com/unexpectedjs/unexpected), Chai |
| **mocks, spies, and stubs**              | sinon                                    | [testdouble.js](https://github.com/testdouble/testdouble.js) |
| **code coverage**                        | [nyc](https://github.com/istanbuljs/nyc) |                                          |
| **e2e**                                  | [Nightwatch](http://nightwatchjs.org/)、[UI Recorder](https://github.com/alibaba/uirecorder) | [Protractor](http://www.protractortest.org/), [Casper](http://casperjs.org/), testcafe, [DalekJS](https://github.com/dalekjs) |
| **模拟浏览器 dom**                            | JsDom                                    |                                          |

## 踩过的坑

- package.json 中包依赖版本锁定管理：不要忽略 warning，关注 [Enzyme Working with React 16](http://airbnb.io/enzyme/docs/installation/react-16.html) 等配置文档
- ignore-styles 忽略样式和资源文件：需要 hook node 的 require， 因此将 setup.ts 改成 setup.js 

### API Docs

- AVA: https://github.com/avajs/ava#api
- Enzyme:  https://github.com/airbnb/enzyme/tree/master/docs/api
- Sinon：http://sinonjs.org/releases/v4.1.2/

## 参考

- [别再加端到端集成测试了，快换契约测试吧](http://insights.thoughtworks.cn/contract-test/)
- [从工程化角度讨论如何快速构建可靠React组件](https://github.com/lcxfs1991/blog/issues/18)
- [How to Test a React and Redux Application ](https://semaphoreci.com/community/tutorials/getting-started-with-create-react-app-and-ava)
- [How to prevent “Property '…' does not exist on type 'Global'” with jsdom and typescript?](https://stackoverflow.com/questions/40743131/how-to-prevent-property-does-not-exist-on-type-global-with-jsdom-and-t)
- [Using enzyme with JSDOM](http://airbnb.io/enzyme/docs/guides/jsdom.html)
- [Antd Pro UI Test](https://pro.ant.design/docs/ui-test#单元测试)
- [Automated React Component Testing with Jest](https://www.distelli.com/docs/tutorials/test-your-react-component-with-jest/)



## 重点解答

1. 常用组合和现在组合优缺点；
2. 各组合适用的应用场景；
3. 测试的开发体验。

### 未来的可能

1. 与测试团队整体测试的接入；
2. 对开发者更加友好，降低用例的创建和维护成本；
3. 从投入产出角度，减少人工干预环节。
