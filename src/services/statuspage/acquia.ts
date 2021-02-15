import StatusPageService from '../base/statuspage'

class Acquia extends StatusPageService {
  constructor() {
    super('Acquia', 'https://status.acquia.com', 'c3bdbqpxhzcc')
  }
}

export default Acquia
