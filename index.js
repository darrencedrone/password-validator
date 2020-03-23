const checkLen = (password) => {
  if (password.length >= 8) {
    return true
  } else {
    return false
  }
}

const checkLower = (password) => {
  for (let i = 0; i < (password.length); i++) {
    if (password[i] == password[i].toLowerCase() && password[i] != password[i].toUpperCase()) {
      return true
    }
  }
  return false
}

const checkUpper = (password) => {
  for (let i = 0; i < (password.length); i++) {
    if (password[i] == password[i].toUpperCase() && password[i] != password[i].toLowerCase()) {
      return true
    }
  }
  return false
}

const checkNum = (password) => {
  for (let i = 0; i < (password.length); i++) {
    if (!Number.isNaN(Number(password[i]))) return true
  }

  return false
}

const checkSpec = (password) => {
  const specialChars = ['!', '?', '.', ',', '@', '$', ';', '#', '%', '&', '*', '^', '(', ')', '[', ']', '+', '=', '-']
  for (let i = 0; i < (specialChars.length); i++) {
    if (password.includes(specialChars[i])) return true
  }

  return false
}

const validatePassword = (password) => {
  return checkLen(password) && checkLower(password) && checkUpper(password) && checkNum(password) && checkSpec(password)
}

module.exports = validatePassword