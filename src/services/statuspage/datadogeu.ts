import StatusPageService from '../base/statuspage'

class DatadogEU extends StatusPageService {
  constructor() {
    super('Datadog (EU)', 'https://status.datadoghq.eu', '5by3sysm209d')
  }
}

export default DatadogEU
