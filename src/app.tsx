import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import cn from 'classnames'

import { Provider } from './context'
import { Loading } from './components/loading'
import Header from './components/header'
import HomeRoute from './routes/home'
import SettingsRoute from './routes/settings'
import SelectionRoute from './routes/selection'

export const App = () => {
  const isWin = process.platform === 'win32' 

  return (
    <Provider>
      <Router>
        <div className={`flex flex-col h-full font-mono text-sm bg-white border border-gray-100 dark:border-gray-900 dark:bg-black dark:text-white text-black ${cn({
          'rounded-2xl': isWin === false
        })}`}>
          <Loading />
          <Header />
          <Switch>
            <Route path="/settings" exact component={SettingsRoute} />
            <Route path="/selection" exact component={SelectionRoute} />
            <Route path="/" exact component={HomeRoute} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}
