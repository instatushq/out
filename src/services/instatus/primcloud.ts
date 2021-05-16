import InstatusService from '../base/instatus'

class Primcloud extends InstatusService {
  constructor() {
    super('Primcloud', 'https://primcloud.instatus.com')
  }
}

export default Primcloud
