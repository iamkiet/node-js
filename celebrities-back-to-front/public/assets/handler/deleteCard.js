function deleteCardHandler(id, callback) {
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:3000/api/celebrities/${id}`,
    data: { },
    contentType: 'application/json',
    success: callback,
    error: function (err, data) {
        alert("Error " + err.responseText);
    }
  });
}