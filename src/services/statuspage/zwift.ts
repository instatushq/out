import StatusPageService from '../base/statuspage'

class Zwift extends StatusPageService {
  constructor() {
    super('Zwift', 'https://status.zwift.com', 'sj50pfj5p1yv')
  }
}

export default Zwift
