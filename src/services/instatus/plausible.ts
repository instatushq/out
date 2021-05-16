import InstatusService from '../base/instatus'

class Plausible extends InstatusService {
  constructor() {
    super('Plausible', 'https://plausible.instatus.com')
  }
}

export default Plausible
