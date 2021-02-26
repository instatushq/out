import Service from './service'

// Intatus services
import Instatus from './instatus/instatus'
import Sketch from './instatus/sketch'
import Linear from './instatus/linear'
import Freecodecamp from './instatus/freecodecamp'

// Statuspage services
import Acquia from './statuspage/acquia'
import AmazeeIO from './statuspage/amazeeio'
import Aptible from './statuspage/aptible'
import Asana from './statuspage/asana'
import Atlassian from './statuspage/atlassian'
import Auth0 from './statuspage/auth0'
import Avalara from './statuspage/avalara'
import Basecamp from './statuspage/basecamp'
import Bitbucket from './statuspage/bitbucket'
import Bitrise from './statuspage/bitrise'
import Bolt from './statuspage/bolt'
import Box from './statuspage/box'
import Braintree from './statuspage/braintree'
import Buildkite from './statuspage/buildkite'
import Bullhorn from './statuspage/bullhorn'
import CampaignMonitor from './statuspage/campaignmonitor'
import CircleCI from './statuspage/circleci'
import CloudApp from './statuspage/cloudapp'
import Cloudflare from './statuspage/cloudflare'
import Cloudinary from './statuspage/cloudinary'
import Clubhouse from './statuspage/clubhouse'
import Cocoapods from './statuspage/cocoapods'
import Codeclimate from './statuspage/codeclimate'
import Codecov from './statuspage/codecov'
import Confluentcloud from './statuspage/confluentcloud'
import Contentful from './statuspage/contentful'
import Coveralls from './statuspage/coveralls'
import Datadog from './statuspage/datadog'
import DatadogEU from './statuspage/datadogeu'
import DigitalOcean from './statuspage/digitalocean'
import Discord from './statuspage/discord'
import Dnsimple from './statuspage/dnsimple'
import Dropbox from './statuspage/dropbox'
import Dwolla from './statuspage/dwolla'
import Egnyte from './statuspage/egnyte'
import Elasticcloud from './statuspage/elasticcloud'
import Engineyard from './statuspage/engineyard'
import Fastly from './statuspage/fastly'
import Figma from './statuspage/figma'
import Filestack from './statuspage/filestack'
import FiveTran from './statuspage/fivetran'
import Gandi from './statuspage/gandi'
import Github from './statuspage/github'
import Hipchat from './statuspage/hipchat'
import Hubspot from './statuspage/hubspot'
import Imgix from './statuspage/imgix'
import Intercom from './statuspage/intercom'
import Jamf from './statuspage/jamf'
import Keenio from './statuspage/keenio'
import Kentik from './statuspage/kentik'
import Lastpass from './statuspage/lastpass'
import Launchdarkly from './statuspage/launchdarkly'
import Lever from './statuspage/lever'
import Lob from './statuspage/lob'
import Linode from './statuspage/linode'
import Loggly from './statuspage/loggly'
import Mailgun from './statuspage/mailgun'
import Mapbox from './statuspage/mapbox'
import Mediatemple from './statuspage/mediatemple'
import Mixpanel from './statuspage/mixpanel'
import Mural from './statuspage/mural'
import Newrelic from './statuspage/newrelic'
import Notion from './statuspage/notion'
import Npm from './statuspage/npm'
import OnePassword from './statuspage/onepassword'
import Packet from './statuspage/packet'
import PagerDuty from './statuspage/pagerduty'
import Pantheon from './statuspage/pantheon'
import Papertail from './statuspage/papertrail'
import Pendo from './statuspage/pendo'
import PivotalTracker from './statuspage/pivotaltracker'
import Pubnub from './statuspage/pubnub'
import Pusher from './statuspage/pusher'
import Python from './statuspage/python'
import Quandl from './statuspage/quandl'
import Quay from './statuspage/quay'
import Recurly from './statuspage/recurly'
import Reddit from './statuspage/reddit'
import RevenueCat from './statuspage/revenuecat'
import Robinhood from './statuspage/robinhood'
import Rollbar from './statuspage/rollbar'
import Rubygems from './statuspage/rubygems'
import SauceLabs from './statuspage/saucelabs'
import Segment from './statuspage/segment'
import SendGrid from './statuspage/sendgrid'
import Sentry from './statuspage/sentry'
import Shopify from './statuspage/shopify'
import SmartyStreets from './statuspage/smartystreets'
import Snyk from './statuspage/snyk'
import Spoke from './statuspage/spoke'
import Squarespace from './statuspage/squarespace'
import Statuspage from './statuspage/statuspage'
import Stream from './statuspage/stream'
import TravisCI from './statuspage/travisci'
import Trello from './statuspage/trello'
import Twilio from './statuspage/twilio'
import Typeform from './statuspage/typeform'
import Unsplash from './statuspage/unsplash'
import UrbanAirship from './statuspage/urbanairship'
import Vercel from './statuspage/vercel'
import VictorOps from './statuspage/victorops'
import Vimeo from './statuspage/vimeo'
import WeTransfer from './statuspage/wetransfer'
import Wodby from './statuspage/wodby'
import Zapier from './statuspage/zapier'
import Zoom from './statuspage/zoom'
import Zwift from './statuspage/zwift'
import TwitterAPI from './statuspage/twitterapi'
import Netlify from './statuspage/netlify'
import Netdata from './statuspage/netdata'
import cdnjs from './statuspage/cdnjs'
import EpicGames from './statuspage/epicgames'

// Status.io services
import Cloud66 from './statusio/cloud66'
import Dashlane from './statusio/dashlane'
import Docker from './statusio/docker'
import Gitlab from './statusio/gitlab'
import Letsencrypt from './statusio/letsencrypt'
import Sendinblue from './statusio/sendinblue'
import Wasabi from './statusio/wasabi'

// Custom services
import Algolia from './algolia'
import Stripe from './stripe'
import Heroku from './heroku'
import AWS from './aws'

const allServices = new Map<string, Service>([
  // Instatus pages
  ['Instatus', new Instatus()],
  ['SketchCloud', new Sketch()],
  ['Linear', new Linear()],
  ['Freecodecamp', new Freecodecamp()],

  // Statuspage pages
  ['Acquia', new Acquia()],
  ['AmazeeIO', new AmazeeIO()],
  ['Aptible', new Aptible()],
  ['Asana', new Asana()],
  ['Atlassian', new Atlassian()],
  ['Auth0', new Auth0()],
  ['Avalara', new Avalara()],
  ['Basecamp', new Basecamp()],
  ['Bitbucket', new Bitbucket()],
  ['Bitrise', new Bitrise()],
  ['Bolt', new Bolt()],
  ['Box', new Box()],
  ['Braintree', new Braintree()],
  ['Buildkite', new Buildkite()],
  ['Bullhorn', new Bullhorn()],
  ['CampaignMonitor', new CampaignMonitor()],
  ['CircleCI', new CircleCI()],
  ['CloudApp', new CloudApp()],
  ['Cloudflare', new Cloudflare()],
  ['Cloudinary', new Cloudinary()],
  ['Clubhouse', new Clubhouse()],
  ['Cocoapods', new Cocoapods()],
  ['Codeclimate', new Codeclimate()],
  ['Codecov', new Codecov()],
  ['Confluentcloud', new Confluentcloud()],
  ['Contentful', new Contentful()],
  ['Coveralls', new Coveralls()],
  ['Datadog', new Datadog()],
  ['DatadogEU', new DatadogEU()],
  ['DigitalOcean', new DigitalOcean()],
  ['Discord', new Discord()],
  ['Dnsimple', new Dnsimple()],
  ['Dropbox', new Dropbox()],
  ['Dwolla', new Dwolla()],
  ['Egnyte', new Egnyte()],
  ['Elasticcloud', new Elasticcloud()],
  ['Engineyard', new Engineyard()],
  ['Fastly', new Fastly()],
  ['Figma', new Figma()],
  ['Filestack', new Filestack()],
  ['FiveTran', new FiveTran()],
  ['Gandi', new Gandi()],
  ['Github', new Github()],
  ['Hipchat', new Hipchat()],
  ['Hubspot', new Hubspot()],
  ['Imgix', new Imgix()],
  ['Intercom', new Intercom()],
  ['Jamf', new Jamf()],
  ['Keenio', new Keenio()],
  ['Kentik', new Kentik()],
  ['Lastpass', new Lastpass()],
  ['Launchdarkly', new Launchdarkly()],
  ['Lever', new Lever()],
  ['Lob', new Lob()],
  ['Loggly', new Loggly()],
  ['Linode', new Linode()],
  ['Mailgun', new Mailgun()],
  ['Mapbox', new Mapbox()],
  ['Mediatemple', new Mediatemple()],
  ['Mixpanel', new Mixpanel()],
  ['Mural', new Mural()],
  ['Newrelic', new Newrelic()],
  ['Notion', new Notion()],
  ['Npm', new Npm()],
  ['OnePassword', new OnePassword()],
  ['Packet', new Packet()],
  ['PagerDuty', new PagerDuty()],
  ['Pantheon', new Pantheon()],
  ['Papertail', new Papertail()],
  ['Pendo', new Pendo()],
  ['PivotalTracker', new PivotalTracker()],
  ['Pubnub', new Pubnub()],
  ['Pusher', new Pusher()],
  ['Python', new Python()],
  ['Quandl', new Quandl()],
  ['Quay', new Quay()],
  ['Recurly', new Recurly()],
  ['Reddit', new Reddit()],
  ['RevenueCat', new RevenueCat()],
  ['Robinhood', new Robinhood()],
  ['Rollbar', new Rollbar()],
  ['Rubygems', new Rubygems()],
  ['SauceLabs', new SauceLabs()],
  ['Segment', new Segment()],
  ['SendGrid', new SendGrid()],
  ['Sentry', new Sentry()],
  ['Shopify', new Shopify()],
  ['SmartyStreets', new SmartyStreets()],
  ['Snyk', new Snyk()],
  ['Spoke', new Spoke()],
  ['Squarespace', new Squarespace()],
  ['Statuspage', new Statuspage()],
  ['Stream', new Stream()],
  ['TravisCI', new TravisCI()],
  ['Trello', new Trello()],
  ['Twilio', new Twilio()],
  ['Typeform', new Typeform()],
  ['Unsplash', new Unsplash()],
  ['UrbanAirship', new UrbanAirship()],
  ['Vercel', new Vercel()],
  ['VictorOps', new VictorOps()],
  ['Vimeo', new Vimeo()],
  ['WeTransfer', new WeTransfer()],
  ['Wodby', new Wodby()],
  ['Zapier', new Zapier()],
  ['Zoom', new Zoom()],
  ['Zwift', new Zwift()],
  ['TwitterAPI', new TwitterAPI()],
  ['Netlify', new Netlify()],
  ['Netdata', new Netdata()],
  ['cdnjs', new cdnjs()],
  ['EpicGames', new EpicGames()],

  // Status.io pages
  ['Cloud66', new Cloud66()],
  ['Dashlane', new Dashlane()],
  ['Docker', new Docker()],
  ['Gitlab', new Gitlab()],
  ['Sendinblue', new Sendinblue()],
  ['Wasabi', new Wasabi()],
  [`Letsencrypt`, new Letsencrypt()],

  // Custom pages
  ['Algolia', new Algolia()],
  ['Stripe', new Stripe()],
  ['Heroku', new Heroku()],
  ['AWS', new AWS()],
])

export default allServices
