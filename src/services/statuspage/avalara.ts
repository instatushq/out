import StatusPageService from '../base/statuspage'

class Avalara extends StatusPageService {
  constructor() {
    super('Avalara', 'https://status.avalara.com', 'm10fpsk86bhy')
  }
}

export default Avalara
