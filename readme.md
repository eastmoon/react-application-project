# Webpack react project

## § Library

此專案包括一下函式庫：

專案環境
* [Node.js](https://nodejs.org/en/)
* [Yarn for package management](https://yarnpkg.com/lang/en/)

專案前端 (client)
* [Webpack](https://webpack.js.org/)

專案後端 (server)
* [socket.io](https://socket.io/)

專案語言規範：
* [ECMAScript 6.0 / Babel](https://babeljs.io/learn-es2015/)

前端主框架
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux)

單元測試框架
* [Macho](https://mochajs.org/)

## § Install project library
```
yarn install
```

## § Execute project command

應用程式啟動，原則上會經過兩道手續
+ 編譯前端頁面
+ 設定並啟動後端伺服器

### 開發模式

開發模式會以 nodemon 監控應用程式原始碼區域；當觀察到程式變動便會重新執行應用程式啟動流程。

```
yarn dev
```

### 產品模式

產品模式執行單次應用程式啟動流程，並且以 production 設定對程式輸出進行編譯。

```
yarn start
```

### 單元測試

```
yarn test
```
