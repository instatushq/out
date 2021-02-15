import axios from 'axios'
import { SettingsState } from '../types'
import Service from './service'
import Status from './status'

class Algolia extends Service {
  constructor() {
    super('Algolia', 'https://status.algolia.com')
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(
      `${this.domain}/2/status/service/all/period/current`
    )

    switch (summary.data.global.status) {
      case 'operational':
        this.status = Status.OPERATIONAL
        break
      case 'degradedPerformance':
      case 'partialOutage':
        this.status = Status.MINOR
        break
      case 'majorOutage':
        this.status = Status.MAJOR
        break
      default:
        this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default Algolia
