import StatusPageService from '../base/statuspage'

class Pusher extends StatusPageService {
  constructor() {
    super('Pusher', 'https://status.pusher.com/', 'p6t5x7tdq8yq')
  }
}

export default Pusher
