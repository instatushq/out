import { SettingsState } from '../../types'
import Service from '../service'
import Status from '../status'

// --

async function getFirstEventInSSEStream<T>(url: string) {
  return new Promise<T>((resolve, reject) => {
    const eventSource = new EventSource(url)
    eventSource.addEventListener('init_event', (event: any) => {
      try {
        resolve(JSON.parse(event.data))
      } catch (error) {
        reject(error)
      } finally {
        eventSource.close()
      }
    })
    eventSource.onerror = (error) => {
      eventSource.close()
      reject(error)
    }
  })
}

// https://hund.io/help/documentation/live-event-streams
interface HundStatus {
  state: 'operational' | 'degraded' | 'outage'
}

class HundService extends Service {
  constructor(name: string, domain: string) {
    super(name, domain)
  }

  async updateStatus(settings: SettingsState) {
    const status = await getFirstEventInSSEStream<HundStatus>(
      `${this.domain}/live/v2/status_page`
    )
    switch (status.state) {
      case 'operational':
        this.status = Status.OPERATIONAL
        break
      case 'degraded':
        // Only some components are having an outage
        this.status = Status.PARTIAL
        break
      case 'outage':
        // Top-level status is set to 'outage' when all the sub-components are
        // on 'outage' themselves, so considered a major outage
        this.status = Status.MAJOR
        break
      default:
        this.status = Status.OPERATIONAL
        break
    }

    this.triggerNotification(settings)
    this.prevStatus = this.status
  }
}

export default HundService
