import StatusPageService from '../base/statuspage'

class Papertrail extends StatusPageService {
  constructor() {
    super('Papertrail', 'http://www.papertrailstatus.com', '0n5jhb30j32t')
  }
}

export default Papertrail
