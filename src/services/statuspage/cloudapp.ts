import StatusPageService from '../base/statuspage'

class CloudApp extends StatusPageService {
  constructor() {
    super('CloudApp', 'http://status.getcloudapp.com', 'jv7lgzmdfxr1')
  }
}

export default CloudApp
