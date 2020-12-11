function npwpValidator(npwp) {
  const npwpString = npwp.toString()
  if (npwpString.length === 15) {
    const validationCode = npwpString[8]
    let splitFormula = []
    let formulaArray = []
    let validationMatch = 0

    for (let i = 0; i < 8; i++) {
      splitFormula.push(npwpString[i])
    }
    
    splitFormula.forEach((el, id) => {
      let calculator
      if (id % 2 === 0) {
        calculator = el * 1
      }
      else {
        calculator = el * 2
      }
      formulaArray.push(calculator.toString())
    })

    formulaArray.forEach(num => {
      if (num.length === 1) {
        validationMatch += +num
      }
      else {
        let sum = +num[0] + +num[1]
        validationMatch += sum
      }
    })

    validationMatchSubstractor = (Math.ceil(validationMatch / 10)) * 10
    const validator = validationMatchSubstractor - validationMatch

    if (validator == validationCode) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return false
  }
}

module.exports = npwpValidator