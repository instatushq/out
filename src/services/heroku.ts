import axios from 'axios'
import { SettingsState } from '../types'
import Service from './service'
import Status from './status'

class Heroku extends Service {
  constructor() {
    super('Heroku', 'https://status.heroku.com')
    this.status = Status.OPERATIONAL
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(`${this.domain}/api/v3/current-status`)
    const production = summary.data.status.Production
    const development = summary.data.status.Development
    const status = production == 'green' ? development : production

    switch (status) {
      case 'green':
        this.status = Status.OPERATIONAL
        break
      default:
        this.status = Status.MAJOR
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default Heroku
