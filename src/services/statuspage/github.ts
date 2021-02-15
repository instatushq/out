import StatusPageService from '../base/statuspage'

class Github extends StatusPageService {
  constructor() {
    super('Github', 'https://www.githubstatus.com', 'kctbh9vrtdwd')
  }
}

export default Github
