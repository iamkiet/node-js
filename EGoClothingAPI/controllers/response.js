RES_DEFAULT = (mode, status, type, data) => {
  return {
    status,
    message: mode + '_' + type,
    data: data
  }
}

module.exports = {
  RES_DEFAULT
}
