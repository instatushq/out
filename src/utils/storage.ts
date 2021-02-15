import { SettingsState } from '../types'
import { Constants } from './constants'

export const loadState = (): {
  settings?: SettingsState
  selected?: Array<string>
} => {
  const existing = localStorage.getItem(Constants.STORAGE_KEY)
  const { selected, settings } = (existing && JSON.parse(existing)) || { selected: [], settings: {} }

  return { selected, settings }
}

export const saveState = (
  settings: SettingsState,
  selected: Array<string>
): void => {
  const settingsString = JSON.stringify({ selected, settings })
  localStorage.setItem(Constants.STORAGE_KEY, settingsString)
}

export const clearState = (): void => {
  localStorage.clear()
}
