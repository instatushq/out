import InstatusService from '../base/instatus'

class Sketch extends InstatusService {
  constructor() {
    super('Sketch', 'https://status.sketch.com')
  }
}

export default Sketch
