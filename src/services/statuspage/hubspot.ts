import StatusPageService from '../base/statuspage'

class Hubspot extends StatusPageService {
  constructor() {
    super('HubSpot', 'https://status.hubspot.com', '8b9w1wwq3g7d')
  }
}

export default Hubspot
