const { app, BrowserWindow } = require('electron')

let mainWindow

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: 500,
    height: 600,
  })

  // mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  mainWindow.loadFile('./app/index.html')
  mainWindow.webContents.openDevTools()
}

app.on('ready', createMainWindow)
