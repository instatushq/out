import axios from 'axios'
import { SettingsState } from '../types'
import Service from './service'
import Status from './status'

class Stripe extends Service {
  constructor() {
    super('Stripe', 'https://status.stripe.com')
    this.status = Status.OPERATIONAL
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(`${this.domain}/current/full`)

    switch (summary.data.overallStatus) {
      case 'up':
        this.status = Status.OPERATIONAL
        break
      case 'degraded':
      case 'partialOutage':
        this.status = Status.MINOR
        break
      case 'down':
        this.status = Status.MAJOR
        break
      case 'pending':
      case 'paused':
      case 'pending':
        this.status = Status.MAINTENANCE
        break
      default:
        this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default Stripe
