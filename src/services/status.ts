enum Status {
  OPERATIONAL,
  MINOR,
  MAJOR,
  PARTIAL,
  MAINTENANCE,
}

export enum ReadableStatus {
  OPERATIONAL = 'is now operational',
  MINOR = 'has a minor outage',
  MAJOR = 'has a major outage',
  PARTIAL = 'has a partial outage',
  MAINTENANCE = 'is under maintenance',
}

export default Status
