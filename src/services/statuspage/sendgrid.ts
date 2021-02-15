import StatusPageService from '../base/statuspage'

class SendGrid extends StatusPageService {
  constructor() {
    super('SendGrid', 'http://status.sendgrid.com', '3tgl2vf85cht')
  }
}

export default SendGrid
