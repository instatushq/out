import InstatusService from '../base/instatus'

class SpaceHey extends InstatusService {
  constructor() {
    super('SpaceHey', 'https://status.spacehey.com')
  }
}

export default SpaceHey
