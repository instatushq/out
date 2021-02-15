import StatusPageService from '../base/statuspage'

class SmartyStreets extends StatusPageService {
  constructor() {
    super('SmartyStreets', 'http://status.smartystreets.com', 'q1z5r94tnt56')
  }
}

export default SmartyStreets
