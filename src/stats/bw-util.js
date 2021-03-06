'use strict'

const Big = require('bignumber.js')

module.exports = (chunk) => {
  return {
    totalIn: new Big(chunk.TotalIn),
    totalOut: new Big(chunk.TotalOut),
    rateIn: new Big(chunk.RateIn),
    rateOut: new Big(chunk.RateOut)
  }
}
