import InstatusService from '../base/instatus'

class Instatus extends InstatusService {
  constructor() {
    super('Instatus', 'https://our.instatus.com')
  }
}

export default Instatus
