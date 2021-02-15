import StatusPageService from '../base/statuspage'

class LaunchDarkly extends StatusPageService {
  constructor() {
    super('LaunchDarkly', 'https://status.launchdarkly.com', '9404kdk7lkn7')
  }
}

export default LaunchDarkly
