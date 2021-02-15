import StatusPageService from '../base/statuspage'

class NewRelic extends StatusPageService {
  constructor() {
    super('New Relic', 'https://status.newrelic.com', 'nwg5xmnm9d17')
  }
}

export default NewRelic
