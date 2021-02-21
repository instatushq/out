import StatusPageService from '../base/statuspage'

class Netdata extends StatusPageService {
  constructor() {
    super('Netdata', 'https://status.netdata.cloud', 'zsvdrp94yfxr')
  }
}

export default Netdata
