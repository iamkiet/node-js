function createCardHandler(newData, callback) {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/celebrities",
    data: JSON.stringify(newData),
    contentType: "application/json; charset=utf-8",
    success: callback,
    error: function (err, data) {
      alert("Error " + err.responseText);
    }
  });
}