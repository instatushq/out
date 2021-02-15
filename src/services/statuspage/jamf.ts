import StatusPageService from '../base/statuspage'

class JAMF extends StatusPageService {
  constructor() {
    super('JAMF', 'https://status.jamf.com', '5z7bmx2nb2yj')
  }
}

export default JAMF
