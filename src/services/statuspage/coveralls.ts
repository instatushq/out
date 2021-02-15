import StatusPageService from '../base/statuspage'

class Coveralls extends StatusPageService {
  constructor() {
    super('Coveralls', 'http://status.coveralls.io', '3h72wtpg5fqs')
  }
}

export default Coveralls
