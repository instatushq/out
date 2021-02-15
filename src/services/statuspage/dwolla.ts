import StatusPageService from '../base/statuspage'

class Dwolla extends StatusPageService {
  constructor() {
    super('Dwolla', 'http://status.dwolla.com', 'tnynfs0nwlgr')
  }
}

export default Dwolla
