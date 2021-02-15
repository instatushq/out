import React, { useState } from 'react'
import cn from 'classnames'
import { shell } from 'electron'

import CheckIcon from '../icons/check'
import OpenIcon from '../icons/open'
import AlertIcon from '../icons/alert'
import WarningIcon from '../icons/warning'
import Status from '../../services/status'
import allServices from '../../services'

type ServiceItemProps = {
  value: string
}

const ServiceItem = ({ value }: ServiceItemProps) => {
  const [isHover, setIsHover] = useState(false)
  const service = allServices.get(value)

  const openServiceLink = (e: any) => {
    e.preventDefault()
    shell.openExternal(service.domain)
  }

  return !service?.name ? (
    <div />
  ) : (
    <div
      key={service.name}
      className="relative flex items-center justify-between px-4 py-3 transition duration-150 ease-in-out border border-gray-200 rounded-lg dark:border-gray-900 hover:border-gray-300 dark:hover:border-gray-800 focus:outline-none dark:focus:border-green-dark focus:dark-green-light"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={openServiceLink}
      onKeyPress={openServiceLink}
      role="button"
      tabIndex={-1}
    >
      <span className="max-w-full truncate">{service.name}</span>
      <div
        className={`transition w-5 h-5 fill-current -mr-1 absolute right-4 top-0 bottom-0 my-auto ease-in-out duration-200 ${cn(
          {
            'dark:text-green-dark text-green-light':
              service.status === Status.OPERATIONAL,
            'text-red-500': service.status === Status.MAJOR,
            'text-yellow-500':
              service.status === Status.MINOR ||
              service.status === Status.PARTIAL ||
              service.status === Status.MAINTENANCE,
            'opacity-0': !isHover,
            'opacity-100': isHover,
          }
        )}`}
      >
        <OpenIcon />
      </div>
      {service.status === Status.OPERATIONAL && (
        <div
          className={`transition absolute w-5 h-5 right-4 -mr-1 top-0 dark:text-green-dark text-green-light fill-current bottom-0 my-auto ease-in-out duration-200 ${cn(
            {
              'opacity-0': isHover,
              'opacity-100': !isHover,
            }
          )}`}
        >
          <div className="fill-current dark:text-green-dark text-green-light">
            <CheckIcon />
          </div>
        </div>
      )}
      {service.status === Status.MAJOR && (
        <div
          className={`transition absolute w-5 h-5 right-4 -mr-1 top-0 text-green-light dark:text-green-dark fill-current bottom-0 my-auto ease-in-out duration-200 ${cn(
            {
              'opacity-0': isHover,
              'opacity-100': !isHover,
            }
          )}`}
        >
          <div className="text-red-500 fill-current">
            <AlertIcon />
          </div>
        </div>
      )}
      {(service.status === Status.MINOR ||
        service.status === Status.PARTIAL ||
        service.status === Status.MAINTENANCE) && (
        <div
          className={`transition absolute w-5 h-5 right-4 -mr-1 top-0 text-green-light dark:text-green-dark fill-current bottom-0 my-auto ease-in-out duration-200 ${cn(
            {
              'opacity-0': isHover,
              'opacity-100': !isHover,
            }
          )}`}
        >
          <div className="text-yellow-500 fill-current">
            <WarningIcon />
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceItem
