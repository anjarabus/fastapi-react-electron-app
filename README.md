# FastAPI-React Desktop App with ElectronJS 

In this project, I use electronJS to build a desktop app which has a simple React front-end and Python (FastAPI) back-end. 

## Explanation of files: 

## How to run the app in development mode: 

## Steps to build and execute app in production mode: 
(MacOS only: for windows you will need to make some changes to your configuration first)

1. Build the React front-end:<br/> 
   `cd frontend/`<br/> 
   `npm run build`
3. Use PyInstaller to compile Python back-end into a standalone executable:<br/>
   `cd ..`(back to root directory) <br/>
   `npm run py-build`
5. Build the Electron app:<br/>
   `npm run electron-build`


