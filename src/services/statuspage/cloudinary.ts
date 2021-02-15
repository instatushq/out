import StatusPageService from '../base/statuspage'

class Cloudinary extends StatusPageService {
  constructor() {
    super('Cloudinary', 'http://status.cloudinary.com', 'd8rszhl2bj7r')
  }
}

export default Cloudinary
