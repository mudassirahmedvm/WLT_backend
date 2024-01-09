const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
try {
    const app = express();
    const port = 1131;
    app.use(bodyParser.json());
    //add api here
    var loginRouter = require('./router/login')
    app.use('/subscriberDetails/api/v1', loginRouter);
    //Ends
    var server = require('http').createServer(app);
    var database = require('../subscriberDetails/config/dbConfig');
    createEnvConfig = async (data) => {
        if (data) {
            Object.keys(data).forEach((element, i) => {
                var value = Object.keys(data)[i];
                process.env[element] = value;
            });
        }
        return '';
    };

    if (process.env.NODE_ENV_CONF) {
        createEnvConfig(process.env.NODE_ENV_CONF);
    } else {
        console.log("ERROR : NODE_ENV_CONFIG not specified")
    }
    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    module.exports = app;
} catch (error) {
    throw error;
}
//code added on 25/12/23