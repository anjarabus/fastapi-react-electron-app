# FastAPI-React Desktop App with ElectronJS 

In this project, I use electronJS to build a simple desktop calculator app which has a React front-end and Python (FastAPI) back-end. The python back-end (script `backend/backend.py` and dependencies in `requirements.txt`) is bundled into a standalone executable using PyInstaller. This is a very powerful tool as it allows people who do not have python installed on their machines to use your app!

You can adapt this project to your own needs by modifying `backend/backend.py` and `frontend/src/App.jsx` and the relevant configuration files. For example, you can use this framework to convert an exisiting web application to a desktop application --- `electron/main.js` will spawn the python back-end, make a desktop app window, and load `frontend/public/index.html` into the desktop window instead of the browser window. 

## Explanation of files: 

<pre>
   root/ 
      |-- backend/ 
          |-- backend.py           <em>Python back-end script</em>
          |-- api.spec           <em>Configuration needed for PyInstaller</em>
      |-- electron/
          |-- main.js           <em>Entry-point for ElectronJS (makes desktop window) and FastAPI back-end (spawns python process)</em>
          |-- preload.js   
          |-- resources/           <em>Contains the app logo in .icns format for MacOS (change to .ico for Windows) </em>
      |-- frontend/
          |-- public/
              |-- index.html          <em>Entry-point for React front-end in dev mode</em>
               ...                <em>Any images (svg) used in the front-end</em>
          |-- src/
              |-- App.jsx           <em>React front-end script</em>
              |-- index.js
              |-- style.css    
          |-- package.json            <em>React dependencies; scripts: start, build</em>
          |-- webpack.config.js
          |-- .babelrc
       |-- requirements.txt                <em>Python packages to install (preferrably inside a venv in the root directory) </em> 
       |-- electron-builder.config.json         <em>Configuration for electron-builder</em>
       |-- package.json                      <em>ElectronJS dependencies; scripts: py-install, py-build, electron-dev, electron-build </em>
  
</pre>

  


## How to run the app in development mode: 

1. Make and activate a python `venv`, then install requirements: <br/>
   ```
   python -m venv desktop_env
   source desktop_env/bin/activate
   pip install -r requirements.txt
   ```

2. Make sure app is in development mode by changing `isDev=false` to `isDev=true` in `electron/main.js`<br/>
   (Only because `electron-is-dev` package was not working correctly for me so I resorted to changing `isDev` manually.)
   
4. Start the React front-end from `frontend/` directory:<br/>
   ```
   cd frontend
   npm start
   ```
   
5. Start the Python back-end from `root` directory:
   ```
   cd ..
   npm run electron-dev
   ```
   

## Steps to build and execute app in production mode: 
#(MacOS only: for windows you will need to make some changes to your configuration first)

1. Build the React front-end:<br/>
   ```
   cd frontend
   npm run build
   ```
   Should create folder `frontend/build/`.
   
3. Use PyInstaller to bundle Python back-end (scripts + dependencies) into a standalone executable:<br/>
   Activate `desktop_env` with
   ```
   source desktop_env/bin/activate
   ```
   Bundle back-end from `root` directory:
   ```
   cd ..
   npm run py-build
   ```
   Should create folders `backend/dist/` and `backend/build/`.

4. Make sure app is in production mode by changing `isDev=true` to `isDev=false` in `electron/main.js`<br/>


5. Build the Electron app:<br/>
   ```
   npm run electron-build
   ```
   Should create folder `dist/`. <br/>
   To launch app, navigate to `dist/mac-arm64/calculator-app`, cross your fingers, and click!

## Things to watch out for: 

1. PyInstaller is tested on MacOS, Windows and Linux, but cannot cross-compile. If you want to make a Windows app, you need to build the app on Windows.
2. Currently `asar: false` is set in `electron-builder.config.js`. To build with asar, you might need to spend some time figuring out how to unpack the scripts you need to call from main.js.  
