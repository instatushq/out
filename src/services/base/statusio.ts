import axios from 'axios'
import { SettingsState } from '../../types'
import Service from '../service'
import Status from '../status'

class StatusIoService extends Service {
  id: string

  constructor(name: string, domain: string, id: string) {
    super(name, domain)
    this.id = id
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(
      `https://api.status.io/1.0/status/${this.id}`
    )

    switch (summary.data.status_code) {
      case '100':
        this.status = Status.OPERATIONAL
        break
      case '300':
        this.status = Status.MINOR
        break
      case '400':
        this.status = Status.PARTIAL
        break
      case '500':
      case '600':
        this.status = Status.MAJOR
        break
      default:
        this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default StatusIoService
