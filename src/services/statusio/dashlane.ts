import StatusIoService from '../base/statusio'

class Dashlane extends StatusIoService {
  constructor() {
    const name = 'Dashlane'
    const url = 'https://status.dashlane.com'
    const id = '5aabcb89fccc4b04d3774443'

    super(name, url, id)
  }
}

export default Dashlane
