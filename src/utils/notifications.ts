const { remote } = require('electron')
import Status, { ReadableStatus } from '../services/status'
import { SettingsState } from '../types'
import { openExternalLink } from './comms'

export const raiseNativeNotification = (
  service: string,
  status: Status,
  url: string,
  settings: SettingsState
) => {
  if (!settings.showNotifications) return

  const readableStatus =
    ReadableStatus[Status[status] as keyof typeof ReadableStatus]
  let title: string = `${service} ${readableStatus}`
  let body: string = `${service} ${readableStatus}`

  const nativeNotification = new Notification(title, { body, silent: true })

  nativeNotification.onclick = () => {
    const appWindow = remote.getCurrentWindow()
    appWindow.hide()
    openExternalLink(url)
  }

  raiseSoundNotification(status, settings)

  return nativeNotification
}

export const raiseSoundNotification = (
  status: Status,
  settings: SettingsState
) => {
  if (status === Status.OPERATIONAL) {
    raiseSoundNotificationUp(settings)
  } else {
    raiseSoundNotificationDown(settings)
  }
}

export const raiseSoundNotificationUp = (settings: SettingsState) => {
  if (!settings.playSound) return
  const audio = new Audio('assets/sounds/up.mp3')
  audio.volume = 0.2
  audio.play()
}

export const raiseSoundNotificationDown = (settings: SettingsState) => {
  if (!settings.playSound) return
  const audio = new Audio('assets/sounds/down.mp3')
  audio.volume = 0.2
  audio.play()
}
