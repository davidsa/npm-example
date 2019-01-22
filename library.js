function myCoolLogger(value, spacing = 4) {
  console.log(JSON.stringify(value, null, spacing))
}

module.exports = myCoolLogger
