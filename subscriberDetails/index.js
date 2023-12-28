const express = require('express');
const bodyParser = require('body-parser');

try {
    const app = express();
    const port = 1131;
    app.use(bodyParser.json());
    var loginRouter = require('./router/login')
    app.use('/subscriberDetails/api/v1', loginRouter);
    var server = require('http').createServer(app);
    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    module.exports = app;
} catch (error) {
    throw error;
}
//code added on 25/12/23