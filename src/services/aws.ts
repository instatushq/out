import axios from 'axios'
import { SettingsState } from '../types'
import Service from './service'
import Status from './status'

class AWS extends Service {
  constructor() {
    super('AWS', 'https://status.aws.amazon.com')
  }

  async updateStatus(settings: SettingsState) {
    const summary = await axios.get(`${this.domain}/data.json`)
    if (!summary.data.current || summary.data.current.length === 0) {
      this.status = Status.OPERATIONAL
      return
    }

    const { status } = summary.data.current[0]

    switch (status) {
      case '0':
      case '1':
        this.status = Status.OPERATIONAL
        break
      case '2':
        this.status = Status.MINOR
        break
      case '3':
        this.status = Status.MAJOR
        break
      default:
        this.status = Status.OPERATIONAL
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default AWS
