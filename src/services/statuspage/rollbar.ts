import StatusPageService from '../base/statuspage'

class Rollbar extends StatusPageService {
  constructor() {
    super('Rollbar', 'http://status.rollbar.com/', '0hsb4m2rq2h3')
  }
}

export default Rollbar
