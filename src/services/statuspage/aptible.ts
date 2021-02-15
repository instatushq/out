import StatusPageService from '../base/statuspage'

class Aptible extends StatusPageService {
  constructor() {
    super('Aptible', 'http://status.aptible.com/', 'fmwgqnbnbc4r')
  }
}

export default Aptible
