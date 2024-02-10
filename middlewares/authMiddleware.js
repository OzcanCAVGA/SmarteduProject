const User = require('../models/User');

module.exports = async (req, res, next) => {
    const user = await User.findById(req.session.userID)
    try {
        if (!user) {
            return res.redirect('/login')
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}