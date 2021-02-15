import StatusPageService from '../base/statuspage'

class Pantheon extends StatusPageService {
  constructor() {
    super('Pantheon', 'https://status.pantheon.io', '80f0zgsx80zh')
  }
}

export default Pantheon
