import StatusPageService from '../base/statuspage'

class RubyGems extends StatusPageService {
  constructor() {
    super('RubyGems', 'https://status.rubygems.org', 'pclby00q90vc')
  }
}

export default RubyGems
