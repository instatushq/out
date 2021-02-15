import StatusPageService from '../base/statuspage'

class Braintree extends StatusPageService {
  constructor() {
    super('Braintree', 'https://status.braintreepayments.com', '03tltrdl3qkv')
  }
}

export default Braintree
