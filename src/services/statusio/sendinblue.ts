import StatusIoService from '../base/statusio'

class Sendinblue extends StatusIoService {
  constructor() {
    const name = 'Sendinblue'
    const url = 'http://status.sendinblue.com'
    const id = '586a5ae632dde2fc5b0013c1'

    super(name, url, id)
  }
}

export default Sendinblue
