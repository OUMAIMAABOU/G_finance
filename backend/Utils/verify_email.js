const user = require('../Models/userModel')
const verify_email = async (req, res) => {
    try {
        const token = req.params.token
        console.log(token)
        const user_ = await user.findOne({ where: { emailToken: token } })
        if (user_) {
            user_.isVerified = true
            await user_.save()
            console.log("email is verified")
        }
        else {
            console.log("email is not verified")
        }
    } catch (error) {
        console.log(error)
    }
}
const verify_email_rest = async (req, res) => {
    try {
        let token = req.params.token
        const user_ = await user.findOne({ where: { emailToken: token } })
        if (user_) {
            user_.isReset = true
            await user_.save()
            console.log("password is verified")
        }
        else {
            console.log("password is not verified")
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = { verify_email, verify_email_rest }