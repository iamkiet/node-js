function updateCardHandler(id, newData) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'PUT',
      url: `http://localhost:3000/api/celebrities/${id}`,
      data: JSON.stringify(newData),
      contentType: 'application/json',
      success: resolve,
      error: reject
    });
  })
}