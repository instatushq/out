import StatusPageService from '../base/statuspage'

class Twitch extends StatusPageService {
  constructor() {
    super('Twitch', 'https://status.twitch.tv', 'yfj40zdsk34s')
  }
}

export default Twitch
