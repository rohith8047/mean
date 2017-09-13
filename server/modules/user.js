var UsersColl = require('../models/schemas').UsersColl;


function login(email, password, callback) {
    var retObj = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        retObj.status = false;
        retObj.message = 'Invalid email';
        callback(retObj);
    } else if (!password || password.length < 8) {
        retObj.status = false;
        retObj.message = 'Invalid password';
        callback(retObj);
    } else {
        UsersColl.findOne({email: email}, function (err, doc) {
            if (err) {
                retObj.status = false;
                retObj.message = 'Please try again!';
                callback(retObj);
            } else if (doc) {
                if (doc.password === password) {
                    retObj.status = true;
                    retObj.message = 'Success';
                    callback(retObj);
                } else {
                    retObj.status = false;
                    retObj.message = 'Wrong password';
                    callback(retObj);
                }
            } else {
                retObj.status = false;
                retObj.message = 'User doesnt exist';
                callback(retObj);
            }
        })
    }
}

module.exports = {
    login: login
};