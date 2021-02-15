import StatusPageService from '../base/statuspage'

class Stream extends StatusPageService {
  constructor() {
    super('Stream', 'http://status.getstream.io', 'gsms7w17y9wc')
  }
}

export default Stream
