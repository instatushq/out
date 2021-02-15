import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import cn from 'classnames'

import { Context } from '../context'
import CloseIcon from './icons/close'
import SettingsIcon from './icons/settings'
import MenuIcon from './icons/menu'
import SearchIcon from './icons/search'

const Header = () => {
  const location = useLocation()
  let history = useHistory()
  const { handleSearch, searchInput }: any = useContext(Context)
  const searchRef = useRef(null)
  const [isSearch, _setIsSearch] = useState(false)
  const isSearchRef = useRef(isSearch)
  const setIsSearch = (data) => {
    isSearchRef.current = data
    _setIsSearch(data)
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode !== 191) return
      if (isSearchRef.current) {
        history.push('/')
        setIsSearch(false)
      } else {
        history.push('/selection')
        handleSearch('')
        setIsSearch(true)
        searchRef.current.focus()
      }
    })
  }, [])

  return (
    <div
      className="fixed z-10 flex items-center justify-between w-full px-10 bg-gradient-to-b from-white to-transparent via-white-75 dark:from-black dark:to-transparent rounded-t-2xl dark:via-black-75"
      style={{ height: 100 }}
    >
      <div className="relative w-full h-full">
        <Link
          to="/settings"
          tabIndex={-1}
          className={`absolute z-10 left-0 transform w-5 transition duration-300 ease-in-out cursor-pointer fill-current my-auto flex items-center justify-center top-0 bottom-0 focus:outline-none ${cn(
            {
              'opacity-100 translate-x-0': location.pathname === '/',
              '-translate-x-2 opacity-0 pointer-events-none':
                location.pathname === '/selection',
              'scale-50 opacity-0 pointer-events-none':
                location.pathname === '/settings',
            }
          )}`}
        >
          <SettingsIcon />
        </Link>
        <Link
          to="/"
          className={`absolute flex items-center transform transition ease-in-out duration-300 justify-center my-auto top-0 bottom-0 left-0 ${cn(
            {
              'opacity-0 pointer-events-none scale-50':
                location.pathname !== '/settings',
              'opacity-100 scale-100': location.pathname === '/settings',
            }
          )}`}
        >
          <div className="p-px -mt-px -ml-1 transition duration-100 ease-in-out cursor-pointer fill-current dark:text-white w-7 dark:hover:text-gray-300">
            <CloseIcon />
          </div>
        </Link>
        <div
          className={`absolute top-0 bottom-0 left-0 transition-all duration-300 transform ease-in-out flex items-center justify-center w-full ${cn(
            {
              'opacity-0 pointer-events-none translate-x-2':
                location.pathname !== '/selection',
              'translate-x-0': location.pathname === '/selection',
            }
          )}`}
        >
          <div className="w-5 h-5 fill-current dark:text-gray-200">
            <SearchIcon />
          </div>
          <input
            id="Search"
            value={searchInput}
            placeholder="Find a service"
            onChange={(e: any) => handleSearch(e.target.value)}
            ref={searchRef}
            className="justify-center w-full p-2 pl-8 my-auto -ml-5 bg-transparent border-b border-white outline-none dark:text-white dark:border-black dark:focus:border-gray-900 focus:border-gray-700"
          />
        </div>
        <Link
          to="/selection"
          onClick={() => {
            handleSearch('')
            searchRef?.current?.focus()
          }}
          className={`absolute p-px -mr-1 w-7 flex dark:text-white text-black fill-current items-center transition ease-in-out transform duration-300 justify-center top-0 my-auto bottom-0 right-0 ${cn(
            {
              'opacity-0 scale-50 pointer-events-none':
                location.pathname === '/selection',
              'opacity-100 scale-100': location.pathname !== '/selection',
            }
          )}`}
        >
          <MenuIcon />
        </Link>
        <Link
          className={`absolute flex items-center transform transition ease-in-out duration-300 justify-center my-auto top-0 bottom-0 right-0 ${cn(
            {
              'opacity-0 pointer-events-none scale-50':
                location.pathname !== '/selection',
              'opacity-100 scale-100': location.pathname === '/selection',
            }
          )}`}
          to="/"
        >
          <div className="-mt-px -mr-1 transition duration-100 ease-in-out cursor-pointer fill-current dark:text-white w-7 dark:hover:text-gray-300">
            <CloseIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
