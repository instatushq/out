export enum Appearance {
  SYSTEM = 'SYSTEM',
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}
export interface SettingsState {
  openAtStartup: boolean
  appearance: Appearance
  showNotifications: boolean
  playSound: boolean
}
