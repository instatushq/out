import axios from 'axios'
import { SettingsState } from '../types'
import Service from './service'
import Status from './status'

class Postmark extends Service {
  constructor() {
    super('Postmark', 'https://status.postmarkapp.com')
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(`${this.domain}/api/1.0/status?local=true`)

    switch (summary.data.status) {
      case 'UP':
        this.status = Status.OPERATIONAL
        break
      case 'DEGRADED':
        this.status = Status.MINOR
        break
      case 'DOWN':
        this.status = Status.MAJOR
        break
      case 'MAINTENANCE':
        this.status = Status.MAINTENANCE
        break
      default:
        this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default Postmark
