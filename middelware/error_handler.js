const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
    
    const customError = {
        msg: err.message || 'something went wrong, please try again later',
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

    res.statusCode(customError.statusCode).json(customError.msg)
}

module.exports = errorHandler