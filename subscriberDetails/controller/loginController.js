module.exports.loginCtrl = async (req, res) => {
    try {
        console.log('sucessfully logged in');
        res.send('yes')
    } catch (error) {
        throw error;
    }
}
//code added on 25/12/23