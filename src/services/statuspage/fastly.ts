import StatusPageService from '../base/statuspage'

class Fastly extends StatusPageService {
  constructor() {
    super('Fastly', 'https://status.fastly.com', '889dh1w1xtt0')
  }
}

export default Fastly
