import StatusPageService from '../base/statuspage'

class Packet extends StatusPageService {
  constructor() {
    super('Packet', 'http://status.packet.net', '39f8vhy6rw5d')
  }
}

export default Packet
