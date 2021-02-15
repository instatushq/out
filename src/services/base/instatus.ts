import axios from 'axios'
import { SettingsState } from '../../types'
import Service from '../service'
import Status from '../status'

class InstatusService extends Service {
  constructor(name: string, domain: string) {
    super(name, domain)
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(`${this.domain}/summary.json`)

    switch (summary?.data?.page?.status) {
      case 'UP':
        this.status = Status.OPERATIONAL
        break
      case 'HASISSUES':
        this.status = Status.MAJOR
        break
      default:
        this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default InstatusService
