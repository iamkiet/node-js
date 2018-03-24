function updateCardHandler(id, newData, callback) {
  $.ajax({
    type: 'PUT',
    url: `http://localhost:3000/api/celebrities/${id}`,
    data: JSON.stringify(newData),
    contentType: 'application/json',
    success: callback,
    error: function (err, data) {
      alert("Error " + err.responseText);
    }
  });
}