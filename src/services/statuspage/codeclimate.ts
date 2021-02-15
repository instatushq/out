import StatusPageService from '../base/statuspage'

class CodeClimate extends StatusPageService {
  constructor() {
    super('Code Climate', 'http://status.codeclimate.com', 'rh2cj4bllp8l')
  }
}

export default CodeClimate
