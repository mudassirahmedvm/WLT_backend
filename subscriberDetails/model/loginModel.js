const { sequelize } = require('../config/dbConfig');
const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');
var staticValue = require('../helpers/staticValues');

module.exports.getUserDetails = async (req) => {
    try {
        if (req?.body?.user_name && req?.body?.password) {
            var [userData] = await sequelize.query(`select * from gma_user_details where username = '${req?.body?.user_name}'`,
                { type: Sequelize.QueryTypes.SELECT });
            if (userData && (userData.password == req?.body.password)) {
                const token = jwt.sign({ user_name: req?.body?.user_name }, staticValue.TOKEN_KEY);
                return { userData, token };
            } else {
                throw new Error('Invalid username or password');
            }
        } else {
            throw new Error('Please enter username and password');
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.userDetails = async (req, res) => {
    try {
        return 'test'
    } catch (error) {
        throw new Error(error);
    }
}