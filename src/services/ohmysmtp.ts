import axios from 'axios'
import { SettingsState } from '../types'
import Service from './service'
import Status from './status'

class OhMySMTP extends Service {
  constructor() {
    super('OhMySMTP', 'https://status.ohmysmtp.com/')
    this.status = Status.OPERATIONAL
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(
      'https://raw.githubusercontent.com/ohmysmtp/status/master/history/summary.json'
    )
    const statuses: string[] = summary.data.map((component) => component.status)
    const upStatuses = statuses.filter((status) => status === 'up')

    if (statuses.length === upStatuses.length) {
      this.status = Status.OPERATIONAL
    } else if (upStatuses.length === 0) {
      this.status = Status.MAJOR
    } else {
      // Case-by-case
      const appStatus = summary.data.find(
        (comp) => comp.slug === 'application'
      )?.status
      const smtpServerStatus = summary.data.find(
        (comp) => comp.slug === 'smtp-server'
      )?.status
      if (appStatus !== 'ok' || smtpServerStatus !== 'ok') {
        this.status = Status.PARTIAL
      } else {
        // Some non-critical components are down (eg: docs, landing page)
        this.status = Status.MINOR
      }
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default OhMySMTP
