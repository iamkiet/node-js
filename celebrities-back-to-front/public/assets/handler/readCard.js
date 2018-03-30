function readAllCardHandler() {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/api/celebrities`,
      contentType: 'application/json',
      success: resolve,
      error: reject
    });
  })
}

function readCardByIdHandler(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/api/celebrities/${id}`,
      contentType: 'application/json',
      success: resolve,
      error: reject
    });
  })
}