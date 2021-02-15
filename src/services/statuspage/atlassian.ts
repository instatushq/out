import StatusPageService from '../base/statuspage'

class Atlassian extends StatusPageService {
  constructor() {
    super('Atlassian', 'https://status.atlassian.com', 'x67gp49yvrzv')
  }
}

export default Atlassian
