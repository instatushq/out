import StatusIoService from '../base/statusio'

class Docker extends StatusIoService {
  constructor() {
    const name = 'Docker'
    const url = 'https://status.docker.com/'
    const id = '533c6539221ae15e3f000031'

    super(name, url, id)
  }
}

export default Docker
