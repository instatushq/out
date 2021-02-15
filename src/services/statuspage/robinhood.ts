import StatusPageService from '../base/statuspage'

class Robinhood extends StatusPageService {
  constructor() {
    super('Robinhood', 'https://status.robinhood.com', '49plxygx5s1k')
  }
}

export default Robinhood
