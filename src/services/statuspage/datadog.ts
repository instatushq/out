import StatusPageService from '../base/statuspage'

class Datadog extends StatusPageService {
  constructor() {
    super('Datadog', 'https://status.datadoghq.com', '1k6wzpspjf99')
  }
}

export default Datadog
