import StatusPageService from '../base/statuspage'

class Gandi extends StatusPageService {
  constructor() {
    super('Gandi.net', 'https://status.gandi.net', 'xnm08yh10bv5')
  }
}

export default Gandi
