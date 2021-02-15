import StatusIoService from '../base/statusio'

class GitLab extends StatusIoService {
  constructor() {
    const name = 'GitLab'
    const url = 'https://status.gitlab.com'
    const id = '5b36dc6502d06804c08349f7'

    super(name, url, id)
  }
}

export default GitLab
