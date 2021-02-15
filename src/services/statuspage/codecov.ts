import StatusPageService from '../base/statuspage'

class Codecov extends StatusPageService {
  constructor() {
    super('Codecov', 'http://status.codeclimate.com', 'rh2cj4bllp8l')
  }
}

export default Codecov
