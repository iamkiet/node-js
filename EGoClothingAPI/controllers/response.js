RES_DEFAULT = (mode, status, type, data) => {
  return {
    status,
    message: mode + '_' + type,
    data: data
  }
}

RES_DATA_SUCCESS = (message, status, data) => {
  return {
    status,
    message,
    data
  }
}
RES_DATA_FAIL = (message, status, err) => {
  return {
    status,
    message,
    err
  }
}

NOT_AVAILABLE = (name) => {
  return {
    status: 403,
    message: `${name} not available`
  }
}


INVALID = (name) => {
  return {
    status: 403,
    message: `invalid ${name}`
  }
}

NOT_EXIST = (name) => {
  return {
    status: 404,
    message: `${name} not found`
  }
}

EXIST = (name) => {
  return {
    status: 409,
    message: `${name} is existed`
  }
}

module.exports = {
  NOT_AVAILABLE,
  INVALID,
  EXIST,
  NOT_EXIST,
  RES_DEFAULT,
  RES_DATA_SUCCESS,
  RES_DATA_FAIL
}
