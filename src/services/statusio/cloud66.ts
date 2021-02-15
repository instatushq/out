import StatusIoService from '../base/statusio'

class Cloud66 extends StatusIoService {
  constructor() {
    const name = 'Cloud66'
    const url = 'https://status.cloud66.com'
    const id = '55a770a50a54eb8c710005a9'

    super(name, url, id)
  }
}

export default Cloud66
