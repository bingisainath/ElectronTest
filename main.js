const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const { start } = require("repl");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: " ELectron",
    width: 1000,
    height: 500,
  });

  // mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file",
  });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);
