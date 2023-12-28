const { Sequelize } = require('sequelize');
const connectionString = `postgresql://localhost:5432/postgres`
const sequelize = new Sequelize(connectionString, {
    username: 'postgres',
    password: '9123',
    logging: false,
    dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log('Database Connected successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = {
    sequelize: sequelize
}
//code added on 25/12/23