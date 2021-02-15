import StatusPageService from '../base/statuspage'

class Twilio extends StatusPageService {
  constructor() {
    super('Twilio', 'https://status.twilio.com', 'gpkpyklzq55q')
  }
}

export default Twilio
