var loginModel = require('../model/loginModel');

module.exports.loginCtrl = async (req, res) => {
    try {
        var userData = await loginModel.getUserDetails(req);
        if (userData) {
            res.status(201).send(userData);
        } else {
            res.status(500).send({statusCode : 500, error_message: 'User not found'});
        }
    } catch (error) {
        res.status(500).send({statusCode : 500, error_message: error.message});
    }
}

module.exports.myDetails = async (req, res) => {
    try {
        var userDetail = await loginModel.userDetails(req);
        if (userDetail) {
            res.status(200).send(userDetail);
        } else {
            res.status(500).send({statusCode : 500, error_message: 'User not found'});
        }
    } catch (error) {
        res.status(500).send({statusCode : 500, error_message: error.message});
    }
}