import React, { useContext, useCallback } from 'react'
import { ipcRenderer, shell } from 'electron'
import cn from 'classnames'

import { Context } from '../../context'
import Toggle from '../settings/toggle'
import QuitIcon from '../icons/quit'
import { Appearance } from '../../types'
import LogoIcon from '../icons/logo'

const Settings = () => {
  const { settings, updateSetting } = useContext(Context)

  const quitApp = useCallback(() => {
    setTimeout(() => {
      ipcRenderer.send('app-quit')
    }, 200)
  }, [])

  return (
    <div className="w-full h-full px-10 pt-20 pb-12 overflow-x-hidden overflow-y-scroll">
      <div className="z-10 flex flex-col justify-between h-full pr-4 mt-4 -mr-4">
        <div className="flex flex-col h-full mt-2 mb-10">
          <div className="flex items-center justify-between">
            <Toggle
              text="Open at startup"
              textColor="white"
              id="openAtStartup"
              checked={settings?.openAtStartup || false}
              setChecked={() => {
                updateSetting('openAtStartup', !settings.openAtStartup)
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <Toggle
              text="Send me notifications"
              textColor="white"
              id="showNotifications"
              checked={settings?.showNotifications || false}
              setChecked={() => {
                updateSetting('showNotifications', !settings?.showNotifications)
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-5">
            <span>Appearance</span>
            <div className="flex items-center text-xs">
              <div
                onClick={() => updateSetting('appearance', Appearance.LIGHT)}
                className={`flex cursor-pointer transition ease-in-out duration-200 items-center justify-center w-16 h-8 mr-3 border rounded-lg ${cn(
                  {
                    'border-gray-900 dark:border-gray-100 bg-gray-900 text-white dark:bg-gray-100 dark:text-black':
                      settings?.appearance === Appearance.LIGHT,
                    'border-gray-800 hover:border-gray-700 hover:bg-gray-800 dark:hover:bg-transparent hover:text-white':
                      settings?.appearance !== Appearance.LIGHT,
                  }
                )}`}
              >
                Light
              </div>
              <div
                onClick={() => updateSetting('appearance', Appearance.DARK)}
                className={`flex items-center cursor-pointer transition ease-in-out duration-200 justify-center w-16 h-8 mr-3 border rounded-lg ${cn(
                  {
                    'border-gray-900 dark:border-gray-100 bg-gray-900 text-white dark:bg-gray-100 dark:text-black':
                      settings?.appearance === Appearance.DARK,
                    'border-gray-800 hover:border-gray-700 hover:bg-gray-800 dark:hover:bg-transparent hover:text-white':
                      settings?.appearance !== Appearance.DARK,
                  }
                )}`}
              >
                Dark
              </div>
              <div
                onClick={() => updateSetting('appearance', Appearance.SYSTEM)}
                className={`flex transition ease-in-out duration-200 items-center justify-center cursor-pointer w-16 h-8 border rounded-lg ${cn(
                  {
                    'border-gray-900 dark:border-gray-100 bg-gray-900 text-white dark:bg-gray-100 dark:text-black':
                      settings?.appearance === Appearance.SYSTEM,
                    'border-gray-800 hover:border-gray-700 hover:bg-gray-800 dark:hover:bg-transparent hover:text-white':
                      settings?.appearance !== Appearance.SYSTEM,
                  }
                )}`}
              >
                Auto
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => shell.openExternal('https://instatus.com')}
            className="w-5 h-5 focus:outline-none"
          >
            <LogoIcon />
          </button>
          <button
            className="flex items-center w-auto h-10 px-4 text-xs transition duration-200 ease-in-out transform border border-gray-800 rounded-lg cursor-pointer focus:outline-none focus:bg-gray-800 hover:bg-gray-900 hover:text-white group dark:hover:bg-transparent dark:hover:border-gray-700"
            onClick={() => quitApp()}
          >
            <div className="w-3 h-3 mr-1 text-black transition duration-200 ease-in-out fill-current dark:text-white group-hover:text-white">
              <QuitIcon />
            </div>
            Quit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
