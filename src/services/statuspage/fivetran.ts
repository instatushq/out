import StatusPageService from '../base/statuspage'

class Fivetran extends StatusPageService {
  constructor() {
    super('Filetran', 'https://status.fivetran.com', '2lfd8mfks09w')
  }
}

export default Fivetran
