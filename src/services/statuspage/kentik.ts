import StatusPageService from '../base/statuspage'

class Kentik extends StatusPageService {
  constructor() {
    super('Kentik', 'https://status.kentik.com', '25fy3sprxcv3')
  }
}

export default Kentik
