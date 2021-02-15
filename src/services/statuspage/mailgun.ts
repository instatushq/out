import StatusPageService from '../base/statuspage'

class Mailgun extends StatusPageService {
  constructor() {
    super('Mailgun', 'http://status.mailgun.com', '6jp439mdyy0k')
  }
}

export default Mailgun
