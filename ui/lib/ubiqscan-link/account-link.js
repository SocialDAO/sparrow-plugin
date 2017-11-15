const prefixForNetwork = require('./prefix-for-network')

module.exports = function (address, network) {
  const net = parseInt(network)
  const prefix = prefixForNetwork(network)
  return `http://ubiqscan.io/address/${address}?node=${prefix}`
}

