import InstatusService from '../base/instatus'

class Deno extends InstatusService {
  constructor() {
    super('Deno', 'https://denostatus.com')
  }
}

export default Deno
