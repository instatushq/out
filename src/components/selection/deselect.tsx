import React, { useContext } from 'react'

import { Context } from '../../context'
import allServices from '../../services'
import CheckIcon from '../icons/check'
import CloseIcon from '../icons/close'

type SelectServiceProps = { value: string }

const DeselectService = ({ value }: SelectServiceProps) => {
  const { remove }: any = useContext(Context)
  const service = allServices.get(value)

  return (
    <div
      key={value}
      role="button"
      onClick={() => remove(value)}
      onKeyPress={() => remove(value)}
      className="flex items-center justify-between px-4 py-3 border rounded-lg cursor-pointer border-green-light dark:border-green-dark group focus:outline-none focus:border-red-500"
      tabIndex={-1}
    >
      <span className="max-w-full truncate">{service?.name}</span>
      <div className="hidden -mr-px group-hover:block">
        <div className="w-6 -my-1 -mr-1 text-red-500 fill-current">
          <CloseIcon />
        </div>
      </div>
      <div className="block w-5 -mr-1 fill-current border-green-light dark:border-green-dark text-green-light dark:text-green-dark group-hover:hidden">
        <CheckIcon />
      </div>
    </div>
  )
}

export default DeselectService
