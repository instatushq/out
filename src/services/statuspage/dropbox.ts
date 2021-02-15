import StatusPageService from '../base/statuspage'

class Dropbox extends StatusPageService {
  constructor() {
    super('Dropbox', 'https://status.dropbox.com', 'kgl53swp0yg1')
  }
}

export default Dropbox
