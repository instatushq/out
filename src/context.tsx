import React, { useState, createContext, useEffect } from 'react'
import * as JsSearch from 'js-search'

import { Appearance, SettingsState } from './types'
import Instatus from './services/instatus/instatus'
import { setOpenAtStartup } from './utils/comms'
import allServices from './services'
import Vercel from './services/statuspage/vercel'
import Cloudflare from './services/statuspage/cloudflare'
import Dropbox from './services/statuspage/dropbox'
import Zoom from './services/statuspage/zoom'
import { setAppearance } from './utils/set-mode'
import Github from './services/statuspage/github'
import useInterval from './utils/use-interval'
import { loadState, saveState } from './utils/storage'
import Service from './services/service'

interface ContextState {
  settings: SettingsState
  isFetching: boolean
  services: Map<string, Service>
  selected: Array<string>
  searchResults: Array<string>
  add: Function
  remove: Function
  searchInput: string
  handleSearch: Function
  updateSetting: Function
}

export const defaultSettings: SettingsState = {
  openAtStartup: false,
  appearance: Appearance.SYSTEM,
  showNotifications: true,
  playSound: false,
}

const defaultSelected = [Instatus.name, Vercel.name, Github.name, Dropbox.name, Zoom.name, Cloudflare.name]

export const Context = createContext<Partial<ContextState>>({})

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isFetching] = useState(false)
  const [settings, setSettings] = useState<SettingsState>(defaultSettings)
  const [selected, setSelected] = useState<Array<string>>([])
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Array<string>>([])
  const [isSettingsInit, setIsSettingsInit] = useState<boolean>(false)
  const search = new JsSearch.Search('name')
  search.sanitizer = new JsSearch.LowerCaseSanitizer()
  search.addIndex('name')
  search.addDocuments(
    Array.from(allServices, ([name, value]) => ({ name, value }))
  )

  useInterval(() => {
    selected.forEach((item) => {
      const service = allServices.get(item)
      service.updateStatus(settings)
    })
}, 5000)

  useEffect(() => {
    const initSettings = () => {
      setIsSettingsInit(true)

      const { settings: settingsStored, selected: selectedStored } = loadState()
      if (settingsStored) {
        setSettings(settingsStored)
      } else {
        setSettings(defaultSettings)
      }

      if (typeof settingsStored?.appearance !== 'undefined') {
        setAppearance(settingsStored.appearance)
      } else {
        setAppearance(Appearance.SYSTEM)
      }

      if (typeof settingsStored?.openAtStartup !== 'undefined') {
        setOpenAtStartup(settingsStored.openAtStartup)
      } else {
        setOpenAtStartup(false)
      }

      if (selectedStored?.length > 0) {
        setSelected(selectedStored)
      }
      else defaultSelected.forEach(item => add(item))
    }
    if (!isSettingsInit) initSettings()
  }, [])

  const updateSetting = (
    name: keyof SettingsState,
    value: boolean | Appearance
  ) => {
    if (name === 'openAtStartup') setOpenAtStartup(value as boolean)
    if (name === 'appearance') setAppearance(value as Appearance)

    const newSettings = { ...settings, [name]: value }
    setSettings(newSettings)
    saveState(newSettings, selected)
  }

  const add = (item: string) => {
    var array = [...selected]
    var index = array.indexOf(item)
    if (index === -1) {
      setSelected(oldArray => [...oldArray, item])
      saveState(settings, selected)
    }
  }

  const remove = (item: string) => {
    var array = [...selected]
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1)
      setSelected(array)
      saveState(settings, selected)
    }
  }

  const handleSearch = (value: string) => {
    if (value === '/') return
    setSearchInput(value)
    const results = search.search(value)
    setSearchResults(results.map(item => item.name))
  }

  return (
    <Context.Provider
      value={{
        isFetching,
        settings,
        services: allServices,
        selected,
        remove,
        add,
        handleSearch,
        searchResults,
        searchInput,
        updateSetting,
      }}
    >
      {children}
    </Context.Provider>
  )
}
