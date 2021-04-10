import CachetService from '../base/cachet'

class CleverCloud extends CachetService {
  constructor() {
    const name = 'Clever Cloud'
    const url = 'https://www.clevercloudstatus.com'
    super(name, url)
  }
}

export default CleverCloud
