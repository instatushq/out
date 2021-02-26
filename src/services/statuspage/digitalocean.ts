import StatusPageService from '../base/statuspage'

class DigitalOcean extends StatusPageService {
  constructor() {
    super('DigitalOcean', 'https://status.digitalocean.com', 's2k7tnzlhrpw')
  }
}

export default DigitalOcean
