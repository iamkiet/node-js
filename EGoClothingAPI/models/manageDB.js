var pool = require('./connectionDB');
// exports.executeQuery = function (query, callback) {
//     pool.getConnection(function (err, connection) {
//         if (err) {
//             if (connection)
//                 connection.release();
//             callback(err)
//             return;
//         }
//         connection.query(query, function (err, rows) {
//             connection.release();
//             if (!err) {
//                 callback(null, rows);
//             } else {
//                 console.log("ERROR IN EXECUTEQUERY 1 - " + err);
//             }
//         });
//         connection.on('error', function (err) {
//             callback(err)
//         });
//     });
// }
// exports.executeQuery = function (query, data, callback) {
//     pool.getConnection(function (err, connection) {
//         if (err) {
//             if (connection)
//                 connection.release();
//             callback(err)
//             return;
//         }
//         connection.query(query, data, function (err, rows) {
            
//             connection.release();
//             if (!err) {
//                 callback(null, rows);
//             } else {
//                 console.log("ERROR IN EXECUTEQUERY 2 - " + err);
//             }
//         });
//         connection.on('error', function (err) {
//             callback(err)
//         });
//     });
// }

exports.executeQuery = (query, data = null, callback) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            if (connection)
                connection.release();
            callback(err)
            return;
        }
        if (data !== null) {
            connection.query(query, data, function (err, rows) {
            
                connection.release();
                if (!err) {
                    callback(null, rows);
                } else {
                    console.log("ERROR IN EXECUTEQUERY 2 - " + err);
                }
            });
        } else {
            connection.query(query, function (err, rows) {
            
                connection.release();
                if (!err) {
                    callback(null, rows);
                } else {
                    console.log("ERROR IN EXECUTEQUERY 2 - " + err);
                }
            });
        }
        connection.on('error', function (err) {
            callback(err)
        });
    });
}