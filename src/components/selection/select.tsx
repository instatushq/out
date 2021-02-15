import React from 'react'

import { Context } from '../../context'
import allServices from '../../services'
import CheckIcon from '../icons/check'

type SelectServiceProps = { value: string }

const SelectService = ({ value }: SelectServiceProps) => {
  const { add }: any = React.useContext(Context)
  const service = allServices.get(value)

  return (
    <div
      key={value}
      onClick={() => add(value)}
      onKeyPress={() => add(value)}
      role="button"
      className="flex items-center justify-between px-4 py-3 transition duration-150 ease-in-out border border-gray-300 rounded-lg cursor-pointer dark:border-gray-900 group hover:border-gray-500 dark:hover:border-gray-200 focus:outline-none focus:border-green-light dark:focus:border-green-dark"
      tabIndex={-1}
    >
      <span className="max-w-full truncate">{service?.name}</span>
      <div className="w-5 -mr-1 text-gray-800 transition duration-150 ease-in-out fill-current group-hover:text-green-light dark:group-hover:text-green-dark">
        <CheckIcon />
      </div>
    </div>
  )
}

export default SelectService
