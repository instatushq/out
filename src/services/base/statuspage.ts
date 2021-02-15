import axios from 'axios'
import { SettingsState } from '../../types'
import Service from '../service'
import Status from '../status'

class StatusPageService extends Service {
  id: string
  serviceDomain: string

  constructor(name: string, domain: string, id: string) {
    super(name, domain)
    this.id = id
    this.serviceDomain = 'statuspage.io'
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(
      `https://${this.id}.${this.serviceDomain}/api/v2/summary.json`
    )

    switch (summary?.data?.status?.indicator) {
      case 'none':
        this.status = Status.OPERATIONAL
        break
      case 'minor':
        this.status = Status.MINOR
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

export default StatusPageService
