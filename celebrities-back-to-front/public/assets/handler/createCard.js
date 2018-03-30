function createCardHandler(newData) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/celebrities",
      data: JSON.stringify(newData),
      contentType: "application/json; charset=utf-8",
      success: resolve,
      error: reject
    });
  })
}