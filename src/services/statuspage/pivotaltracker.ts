import StatusPageService from '../base/statuspage'

class PivotalTracker extends StatusPageService {
  constructor() {
    super(
      'Pivotal Tracker',
      'https://status.pivotaltracker.com',
      'mjwp4vwtvdp8'
    )
  }
}

export default PivotalTracker
