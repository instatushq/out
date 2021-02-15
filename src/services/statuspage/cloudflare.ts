import axios from 'axios'
import { SettingsState } from '../../types'

import StatusPageService from '../base/statuspage'
import Status from '../status'

class Cloudflare extends StatusPageService {
  constructor() {
    super('Cloudflare', 'https://www.cloudflarestatus.com', 'yh6f0r4529hb')
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(
      `https://${this.id}.${this.serviceDomain}/api/v2/summary.json`
    )

    switch (summary.data.status.indicator) {
      case 'none':
        this.status = Status.OPERATIONAL
        break
      case 'minor':
        this.status = Status.OPERATIONAL
        break
      case 'critical':
        this.status = Status.MAJOR
        break
      case 'maintenance':
        this.status = Status.MAINTENANCE
        break
      default:
        this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default Cloudflare
