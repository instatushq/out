import HundService from '../base/hund'

class Bitwarden extends HundService {
  constructor() {
    const name = 'Bitwarden'
    const url = 'https://status.bitwarden.com'
    super(name, url)
  }
}

export default Bitwarden
