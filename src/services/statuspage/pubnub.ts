import StatusPageService from '../base/statuspage'

class PubNub extends StatusPageService {
  constructor() {
    super('PubNub', 'http://status.pubnub.com', 'j2pr9thwz01t')
  }
}

export default PubNub
