var mongoDB = require('mongoose');

const url_db = 'mongodb+srv://test_work:sPXbULf5cEBhppFB@clusterapi-idck3.mongodb.net/ClusterAPI?retryWrites=true&w=majority';

const options_conect = {
    poolSize: 5,
    useUnifiedTopology: true
};

try {
    var client = mongoDB.connect(
        url_db, 
        options_conect
    );

    var db = client.connection;

    db.on(
        'error', 
        console.error.bind(
            console, 
            'MongoDB connection error:'
        )
    );


} catch (error) {
    console.log('- - - - - - DataBase Connection Error - - - - - - ');
    console.log(error);
    console.log('- - - - - - DataBase Connection Error - - - - - - ');
}

// module.exports.mongoose = mongoDB  

// module.exports = function(){
//     var db = mongoDB.MongoClient(
//         'weatherforecast',
//         new mongoDB.Server(
//             '127.0.0.1',
//             27017,
//             {}
//         ),
//         {}
//     );

//     return db;
// }

// key: sPXbULf5cEBhppFB
// user: test_work
// mongodb+srv://test_work:sPXbULf5cEBhppFB@clusterapi-idck3.mongodb.net/ClusterAPI?retryWrites=true&w=majority