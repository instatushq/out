import React from 'react'
import cn from 'classnames'

interface IProps {
  text: string
  checked: boolean
  setChecked: (any) => any
  textColor: string
  id: string
}

const Toggle: React.FC<IProps> = ({
  text,
  checked,
  setChecked,
  textColor,
  id,
}) => (
  <div className="w-full">
    <label
      htmlFor={id}
      className="flex items-center justify-between w-full outline-none select-none"
    >
      <span className={`cursor-pointer flex-grow ${textColor}`}>{text}</span>
      <div className="relative align-middle bg-transparent cursor-pointer select-none inline-blockw">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          className="hidden"
          onChange={setChecked}
        />
        <div
          className={`bg-gray-600 w-12 h-6 rounded-full shadow-inner transition ease-in-out duration-300 focus:outline-none track ${cn(
            {
              'transform transition-colors bg-green-light dark:bg-green-dark': checked,
            }
          )}
        `}
        />
        <div
          className={`absolute w-6 h-6 border-4 top-0 left-0 transition-all duration-300 ease-in-out bg-white border-gray-600 rounded-full thumb ${cn(
            {
              'transform translate-x-full border-green-light dark:border-green-dark': checked,
            }
          )}`}
        />
      </div>
    </label>
  </div>
)

export default Toggle
