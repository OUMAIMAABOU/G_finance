const jwt = require('jsonwebtoken')
function gererateAccessToken (user,expirestime) 
{
 return jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:expirestime})
}
 
module.exports = gererateAccessToken