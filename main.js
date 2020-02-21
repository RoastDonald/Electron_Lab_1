const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require('electron');

const isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true },
        frame:false
    });

    mainWindow.setMenu(null)

    if (isDev) {
        mainWindow.loadURL('http://localhost:3000')
    } else {
        mainWindow.loadFile('build/index.html')
    }

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => mainWindow = null);
}





ipcMain.on('exitEvent', (event, arg) => {
    app.quit();
    
  })

ipcMain.on('hideEvent', (event, arg) => {
    
    
  })







app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});