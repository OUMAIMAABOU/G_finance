const express = require('express')
const apiError = require('../Utils/ErrorUtils')
const errRoute = express()

errRoute.all('*',(req,res,next)=>{
    // create error and send it to error handling midleware
    const err = new Error(`can't find this route : ${req.originalUrl}`)
    return next(new apiError(err.message,400))
    })
module.exports = errRoute