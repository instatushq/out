import StatusPageService from '../base/statuspage'

class Quay extends StatusPageService {
  constructor() {
    super('Quay', 'http://status.quay.io', '8szqd6w4s277')
  }
}

export default Quay
