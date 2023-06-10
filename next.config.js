const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const { i18n } = require('./next-i18next.config')

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "frenzyforge.s3.eu-west-3.amazonaws.com",
      "localhost"
    ],
  },
  i18n,
})