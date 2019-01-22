function myCoolLogger(value, spacing = 4) {
  console.log("nueva version")
  console.log(JSON.stringify(value, null, spacing))
}

module.exports = myCoolLogger
