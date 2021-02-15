import StatusPageService from '../base/statuspage'

class Auth0 extends StatusPageService {
  constructor() {
    super('Auth0', 'https://status.auth0.com', '8q60stg1rk7l')
  }
}

export default Auth0
