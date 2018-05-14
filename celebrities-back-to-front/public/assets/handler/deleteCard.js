function deleteCardHandler(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3001/api/celebrities/${id}`,
      data: { },
      contentType: 'application/json',
      success: resolve,
      error: reject
    });
  })
}