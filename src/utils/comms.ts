const { ipcRenderer, remote, shell } = require('electron')

export function openExternalLink(url: string): void {
  shell.openExternal(url)
}

export function setOpenAtStartup(value: boolean): void {
  remote.app.setLoginItemSettings({
    openAtLogin: value,
    openAsHidden: value,
  })
}

export function reOpenWindow(): void {
  ipcRenderer.send('reopen-window')
}

export function restoreSetting(setting, value): void {
  ipcRenderer.send(setting, value)
}
