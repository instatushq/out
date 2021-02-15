import StatusIoService from '../base/statusio'

class Wasabi extends StatusIoService {
  constructor() {
    const name = 'Wasabi'
    const url = 'https://status.wasabi.com'
    const id = '5abbc12aeb57a904e44a58d3'

    super(name, url, id)
  }
}

export default Wasabi
