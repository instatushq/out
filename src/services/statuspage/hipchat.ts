import StatusPageService from '../base/statuspage'

class Hipchat extends StatusPageService {
  constructor() {
    super('Hipchat', 'https://www.githubstatus.com', 'kctbh9vrtdwd')
  }
}

export default Hipchat
