import StatusPageService from '../base/statuspage'

class Pendo extends StatusPageService {
  constructor() {
    super('Pendo', 'https://status.pendo.io/api', 'qxvy69hcwh22')
  }
}

export default Pendo
