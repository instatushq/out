import StatusPageService from '../base/statuspage'

class PagerDuty extends StatusPageService {
  constructor() {
    super('PagerDuty', 'https://status.pagerduty.com', '33yy6hwxnwr3')
  }
}

export default PagerDuty
