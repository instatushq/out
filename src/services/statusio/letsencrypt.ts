import StatusIoService from '../base/statusio'

class LetsEncrypt extends StatusIoService {
  constructor() {
    const name = "Let's Encrypt"
    const url = 'https://letsencrypt.status.io'
    const id = '55957a99e800baa4470002da'

    super(name, url, id)
  }
}

export default LetsEncrypt
