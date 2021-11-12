import StatusPageService from '../base/statuspage'

class Maven extends StatusPageService {
  constructor() {
    super('Maven', 'http://status.maven.org', '68grm88cvpc8')
  }
}

export default Maven
