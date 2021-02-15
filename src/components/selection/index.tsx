import React, { useContext } from 'react'
import { shell } from 'electron'

import { Context } from '../../context'
import DeselectService from './deselect'
import SelectService from './select'
import allServices from '../../services'

const all = Array.from(allServices).map(([key, name]) => key)

const Selection = () => {
  const { searchInput, searchResults, selected } = useContext(Context)
  const notSelected = all.filter(item => selected.includes(item) === false)

  const goToGithub = (e) => {
    e.preventDefault()
    shell.openExternal('https://github.com/instatushq/out')
  }

  return (
    <div className="w-full h-full px-10 pt-20 pb-12 overflow-x-hidden overflow-y-scroll text-black dark:text-white">
      <div className="z-10 pr-4 mt-4 -mr-4">
        <div className="grid grid-cols-2 gap-4" data-tid="container">
          {searchInput ? (
            <>
              {searchResults && searchResults.length > 0 ? (
                <>
                  {searchResults.map((value, _index) => (
                    <SelectService value={value} key={value} />
                  ))}
                </>
              ) : (
                <div>
                  <p>Can&apos;t find this :(</p>
                  <button
                    type="button"
                    className="mt-6 font-bold text-green-light dark:text-green-dark focus:outline-none"
                    onClick={goToGithub}
                    onKeyPress={goToGithub}
                  >
                    Add it on Github?
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              {selected.map((value, _index) => (
                <DeselectService key={value} value={value} />
              ))}
              {notSelected.map((value, _index) => (
                <SelectService key={value} value={value} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Selection
