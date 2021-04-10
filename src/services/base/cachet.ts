import axios, { AxiosResponse } from 'axios'
import { SettingsState } from '../../types'
import Service from '../service'
import Status from '../status'

// https://docs.cachethq.io/docs/component-statuses
enum CachetComponentStatus {
  OPERATIONAL = 1, // The component is working.
  PERFORMANCE_ISSUES = 2, // The component is experiencing some slowness.
  PARTIAL_OUTAGE = 3, // The component may not be working for everybody. This could be a geographical issue for example.
  MAJOR_OUTAGE = 4, // The component is not working for anybody.
}

interface CachetComponent {
  enabled: boolean
  status: CachetComponentStatus
}

type CachetComponentsResponse = AxiosResponse<{
  // todo: Handle pagination.
  // By default only the first 20 components are monitored.
  meta: any
  data: CachetComponent[]
}>

// --

class CachetService extends Service {
  constructor(name: string, domain: string) {
    super(name, domain)
  }

  async updateStatus(settings: SettingsState) {
    const components = await axios.get<any, CachetComponentsResponse>(
      `${this.domain}/api/v1/components`
    )

    const status = components?.data?.data?.reduce<CachetComponentStatus>(
      (highestStatus, component) =>
        component.enabled
          ? Math.max(highestStatus, component.status)
          : highestStatus, // skip disabled components
      CachetComponentStatus.OPERATIONAL
    )

    switch (status) {
      case CachetComponentStatus.OPERATIONAL:
        this.status = Status.OPERATIONAL
        break
      case CachetComponentStatus.PERFORMANCE_ISSUES:
        this.status = Status.MINOR
        break
      case CachetComponentStatus.PARTIAL_OUTAGE:
        this.status = Status.PARTIAL
        break
      case CachetComponentStatus.MAJOR_OUTAGE:
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

export default CachetService
