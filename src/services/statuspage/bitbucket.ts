import StatusPageService from '../base/statuspage'

class BitBucket extends StatusPageService {
  constructor() {
    super('BitBucket', 'https://status.bitbucket.org', 'bqlf8qjztdtr')
  }
}

export default BitBucket
