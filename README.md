# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Run this on your Machine

### Step 1:
Download this Project and extract on desktop

### Step 2:
Install MetaMask extension and login to your Account

### Step 3:
Open Front-End in vs code or any IDE you like

### Step 4:
Open vs code terminal and type `npm run eject`

### Step 5:
After that config file will be created in your Folder

### Note:
If Step 4 is unsuccessfull then type these four commands in terminal

#### 1. Cd to your peoject folder
#### 2. git status
#### 3. git add .
#### 4. git commit -m "Status"
#### 5. git status

After this again do Step 4

### Step 6:
Now go to Config Folder and in `webpack.config.js` file and replace this code

`loader: require.resolve('css-loader'),options: {importLoaders:1,modules:{localIdentName:"[name]__[local]__[hash:base64:5]"}}`
     
on line 112(css-loader)

### Step 7:
 Type npm install 
 
### Step 8:
Type npm start and dont close this server

### Step 9:

Open Backend folder and type npm install

### Step 10:

Do npm start
