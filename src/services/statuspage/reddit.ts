import StatusPageService from '../base/statuspage'

class Reddit extends StatusPageService {
  constructor() {
    super('Reddit', 'http://www.redditstatus.com/', '2kbc0d48tv3j')
  }
}

export default Reddit
