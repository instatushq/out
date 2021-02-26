import axios from 'axios'
import { SettingsState } from '../types'
import Service from './service'
import Status from './status'

class Slack extends Service {
  constructor() {
    super('Slack', 'https://status.slack.com')
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(`${this.domain}/api/v2.0.0/current`)

    if (summary.data.status === 'active') {
      switch (summary.data.type) {
        case 'incident':
          this.status = Status.MINOR
          break
        case 'outage':
          this.status = Status.MAJOR
          break
        case 'notice':
          this.status = Status.MAINTENANCE
          break
      }
    } else {
      this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default Slack
