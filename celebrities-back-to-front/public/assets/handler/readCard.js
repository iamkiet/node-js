function readAllCardHandler(callback) {
  $.ajax({
    type: 'GET',
    url: `http://localhost:3000/api/celebrities`,
    contentType: 'application/json',
    success: callback,
    error: function (err, data) {
        alert("Error " + err.responseText);
    }
  });
}

function readCardByIdHandler(id, callback) {
  $.ajax({
    type: 'GET',
    url: `http://localhost:3000/api/celebrities/${id}`,
    contentType: 'application/json',
    success: callback,
    error: function (err, data) {
        alert("Error " + err.responseText);
    }
  });
}