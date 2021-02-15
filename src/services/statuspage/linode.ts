import StatusPageService from '../base/statuspage'

class Linode extends StatusPageService {
  constructor() {
    super('Linode', 'https://status.linode.com', '8dn0wstr1chc')
  }
}

export default Linode
