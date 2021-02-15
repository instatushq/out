import InstatusService from '../base/instatus'

class Nasa extends InstatusService {
  constructor() {
    super('Nasa', 'https://nasa.instatus.com')
  }
}

export default Nasa
