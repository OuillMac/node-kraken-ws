const { KrakenWS } = require('../build/index.js')

console.log('krakenWs', KrakenWs)
// const krakenWs = new KrakenWS()

// console.log('connecting...')
// 
// krakenWs.on('kraken:subscription', payload => {
//   const { channelID, data, subsciptionName, pair } = payload
//   console.log(
//     'SUBSCIPTION EVENT:',
//     JSON.stringify({ channelID, data, subsciptionName, pair }, null, 2)
//   )
// })
// 
// krakenWs.connect()
//   .then(() => {
//     krakenWs.subscribeToTrade({})
//   })
//   //.then(() => {
//   //  console.log('connected!')
// 
//   //  return krakenWs.subscribe('XBT/EUR', 'ohlc', { interval: 60 })
//   //})
//   //.then(channelIds => {
//   //  console.log(`Channel ids: ${channelIds.join(', ')}`)
//   //})
//   .catch(e => {
//     console.log('error?', e)
//   })