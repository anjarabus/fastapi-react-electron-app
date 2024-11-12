# FastAPI-React Desktop App with ElectronJS 

In this project, I use electronJS to build a simple desktop calculator app which has a React front-end and Python (FastAPI) back-end. 

## Explanation of files: 

<pre>
   root/ 
      |-- backend/ 
          |-- backend.py    <em>python back-end script</em>
          |-- api.spec      <em>configuration needed for PyInstaller</em>
      |-- electron/
          |-- main.js       <em>electronJS entry-point</em>
          |-- preload.js   
          |-- resources/
      |-- frontend/
          |-- public/
              |-- index.html   <em>frontend entry-point in dev mode</em>
          |-- src/
              |-- App.jsx      <em>React front-end script</em>
              |-- index.js
              |-- style.css
          |-- package.json
          |-- webpack.config.js
          |-- .babelrc
       |-- electron-builder.config.json
       |-- package.json
       |-- requirements.txt
</pre>

  


## How to run the app in development mode: 

1. Make and activate a `venv`, then install requirements: <br/>
```
   python -m venv desktop_env <br/>
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
(MacOS only: for windows you will need to make some changes to your configuration first)

1. Build the React front-end:<br/>
   ```
   cd frontend
   npm run build
   ```
   
3. Use PyInstaller to bundle Python back-end (scripts + dependencies) into a standalone executable:<br/>
Activate `desktop_env` with
```
   source desktop_env/bin/activate
```
 OR install pyinstaller globally using
 ```
 pip install pyinstaller
```
Bundle back-end from `root` directory:
```
   cd ..
   npm run py-build
```

4. Make sure app is in production mode by changing `isDev=true` to `isDev=false` in `electron/main.js`<br/>


5. Build the Electron app:<br/>
```
   npm run electron-build
```

## Things to watch out for: 

1. PyInstaller is tested on MacOS, Windows and Linux, but cannot cross-compile. If you want to make a Windows app, you need to build the app on Windows.
2. Currently `asar: false` is set in `electron-builder.config.js`
