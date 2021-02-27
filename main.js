const { ipcMain, app, session } = require('electron')
const { menubar } = require('menubar')
const { autoUpdater } = require('electron-updater')
const { onFirstRunMaybe } = require('./first-run')
const path = require('path')

const iconIdleMacOS = path.join(
  __dirname,
  'assets',
  'images',
  'tray-idleTemplate.png'
)

const iconIdleWindows = path.join(
  __dirname,
  'assets',
  'images',
  'tray-windows.ico'
)

const browserWindowOpts = {
  width: 460,
  height: 400,
  minWidth: 460,
  minHeight: 400,
  resizable: false,
  transparent: true,
  icon: process.platform === 'win32' ? iconIdleWindows : iconIdleMacOS,
  webPreferences: {
    enableRemoteModule: true,
    overlayScrollbars: true,
    nodeIntegration: true,
    contextIsolation: false,
  },
}

const delayedHideAppIcon = () => {
  if (app.dock && app.dock.hide) {
    // Setting a timeout because the showDockIcon is not currently working
    // See more at https://github.com/maxogden/menubar/issues/306
    setTimeout(() => {
      app.dock.hide()
    }, 1500)
  }
}

app.on('ready', async () => {
  await onFirstRunMaybe()
})

const menubarApp = menubar({
  icon: process.platform === 'win32' ? iconIdleWindows : iconIdleMacOS,
  index: `file://${__dirname}/index.html`,
  browserWindow: browserWindowOpts,
  preloadWindow: true,
})

menubarApp.on('ready', () => {
  delayedHideAppIcon()

  menubarApp.tray.setIgnoreDoubleClickEvents(true)
  // menubarApp.window.openDevTools()

  autoUpdater.checkForUpdatesAndNotify()

  ipcMain.on('reopen-window', () => menubarApp.showWindow())
  ipcMain.on('app-quit', () => menubarApp.app.quit())
  ipcMain.on('update-icon', (_, arg) => {
    if (!menubarApp.tray.isDestroyed()) {
      menubarApp.tray.setImage(iconIdleMacOS)
    }
  })
})


