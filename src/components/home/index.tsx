import React, { useContext } from 'react'

import ServiceItem from './item'

import { Context } from '../../context'

const Home = () => {
  const { selected } = useContext(Context)

  return (
    <div className="w-full h-full px-10 pt-20 pb-12 overflow-x-hidden overflow-y-scroll">
      <div className="pr-4 mt-4 -mr-4">
        <div className="grid grid-cols-2 gap-4" data-tid="container">
          {selected.map((value, index) => (
            <ServiceItem value={value} key={value} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
