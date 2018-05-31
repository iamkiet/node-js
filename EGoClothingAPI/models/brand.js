var db = require('./manageDB');

// create brand
createBrand = (brand) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into brand (Brand_Name, LogoURL) values (?, ?)", [brand.Brand_Name, brand.LogoURL],
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

// read brand
findBrands = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from brand where Brand_IsRemoved = 0",
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// find by id
findBrandById = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from brand where Brand_Id = ?", id,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

// update brand
updateBrand = (brand) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update brand set Brand_Name = ?, LogoURL = ? where Brand_Id = ?",
    [brand.Brand_Name, brand.LogoURL, brand.Brand_Id],
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    });
  })
}

// delete
deleteBrand = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update brand set Brand_IsRemoved = 1 where Brand_Id = ?", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  createBrand,
  findBrands,
  findBrandById,
  updateBrand,
  deleteBrand,
}
