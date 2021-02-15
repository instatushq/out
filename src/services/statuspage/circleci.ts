import StatusPageService from '../base/statuspage'

class CircleCI extends StatusPageService {
  constructor() {
    super('CircleCI', 'https://status.circleci.com/', '6w4r0ttlx5ft')
  }
}

export default CircleCI
