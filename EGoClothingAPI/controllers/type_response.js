const UPDATE_SUCCESS = "UPDATE SUCCESS";
const DELETE_SUCCESS = "DELETE SUCCESS";

responseSuccess = (type) => {
  return {
    status: 200,
    message: type + " SUCCESS"
  }
}

module.exports = {
  DELETE_SUCCESS,
  UPDATE_SUCCESS,
  responseSuccess
}
