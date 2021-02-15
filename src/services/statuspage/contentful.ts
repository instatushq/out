import StatusPageService from '../base/statuspage'

class Contentful extends StatusPageService {
  constructor() {
    super('Contentful', 'http://status.contentful.com', '4bv17htq00cz')
  }
}

export default Contentful
