import StatusPageService from '../base/statuspage'

class CampaignMonitor extends StatusPageService {
  constructor() {
    super(
      'Campaign Monitor',
      'https://status.campaignmonitor.com',
      'j9b13g64tzwn'
    )
  }
}

export default CampaignMonitor
