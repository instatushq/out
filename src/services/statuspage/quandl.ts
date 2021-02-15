import StatusPageService from '../base/statuspage'

class Quandl extends StatusPageService {
  constructor() {
    super('Quandl', 'http://status.quandl.com', 'dyfxchz1hcb1')
  }
}

export default Quandl
