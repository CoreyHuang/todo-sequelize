# Todo List
### 使用者可以創建個人的帳戶，記錄待完成的事件，將解決的部分做記號，也可以刪除或修改錯誤或過時的項目。

---
![image](https://github.com/CoreyHuang/todo-sequelize/blob/master/home.png)

### installation and execution(安裝與執行步驟):
#### `<安裝步驟>`
#### 1. 安裝git
#### 2. 安裝nvm (node管控工具)
#### 3. 安裝node.js與設定版本
```
nvm install 10.15.0
nvm use 10.15.0
```
#### 4. 安裝npm nodemon
```
npm install -g nodemon
```

#### `<執行步驟>`
#### 1. 使用terminal下載專案
```
git clone https://github.com/CoreyHuang/todo-sequelize.git
```
#### 2. 安裝npm套件(package.json)
```
npm install
```
#### 3. 環境變數設定
```
cp .env.example .env
```
#### 4. 載入種子資料(MySQL)
```
npm run seed
```
#### 5. 開啟本地伺服(專案資料夾中)
```
nodemon app.js or npm run dev
```
#### 6. 執行
```
URL: http://localhost:3000/
```

### Test Account
|Account|Password|
|:-----:|:------:|
|root@example.com|12345678|


### Prerequisites(環境建置與需求):
#### `<安裝需求>`
 1. git : v2.27.0.windows.1
 2. nvm : v1.1.7
 3. node : v10.15.0
 4. npm : v6.4.1
 5. nodemon : v2.0.4
#### `<npm套件>`
 1. express : v4.17.1
 2. express-handlebars : v5.1.0
 3. mysql2 : v2.1.0
 4. body-parser : v1.19.0
 5. method-override : v3.0.0
 6. bcryptjs : v2.4.3
 7. connect-flash : v0.1.1
 8. dotenv : v8.2.0
 9. express-session : v1.17.1
 10. passport : v0.4.1
 11. passport-facebook : v3.0.0
 12. passport-local : v1.0.0
 13. sequelize : v6.3.5
 14. sequelize-cli : v6.2.0