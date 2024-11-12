# FastAPI-React Desktop App with ElectronJS 

In this project, I use electronJS to build a simple desktop calculator app which has a React front-end and Python (FastAPI) back-end. 

## Explanation of files: 

## How to run the app in development mode: 

1. Make and activate a `venv`, then install requirements: <br/>
   `python -m venv desktop_env` <br/>
   `source desktop_env/bin/activate` <br/>
   `pip install -r requirements.txt`
3. Start the React front-end:<br/>
   `cd frontend`<br/>
   `npm start`<br/>
5. Start the Python back-end:
   `cd ..` (back to root directory)<br/>
   `npm run electron-dev`
   

## Steps to build and execute app in production mode: 
(MacOS only: for windows you will need to make some changes to your configuration first)

1. Build the React front-end:<br/> 
   `cd frontend`<br/> 
   `npm run build`
3. Use PyInstaller to compile Python back-end into a standalone executable:<br/>
   `source desktop_env/bin/activate` OR install pyinstaller globally `pip install pyinstaller` <br/>
   `cd ..` (back to root directory) <br/>
   `npm run py-build`
5. Build the Electron app:<br/>
   `npm run electron-build`


