import StatusPageService from '../base/statuspage'

class TwitterAPI extends StatusPageService {
  constructor() {
    super('Twitter API', 'https://api.twitterstat.us', 'zjttvm6ql9lp')
  }
}

export default TwitterAPI
