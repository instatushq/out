import StatusPageService from '../base/statuspage'

class Intercom extends StatusPageService {
  constructor() {
    super('Intercom', 'https://status.intercom.com', '1m1j8k4rtldg')
  }
}

export default Intercom
