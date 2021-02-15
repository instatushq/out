import StatusPageService from '../base/statuspage'

class Loggly extends StatusPageService {
  constructor() {
    super('Loggly', 'http://status.loggly.com', '701xnxqmhdh3')
  }
}

export default Loggly
