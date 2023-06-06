const APIError = require("../utils/errors")

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof APIError) {
        return res.status(err.statusCode || 400)
        .json({
            succes: false,
            message: err.message
        })

        

    }
    console.log(err);
   
    return res.status(500).json({
        success: false,
        message: "Bir hatayla karşılaştık, lütfen apinizi kontrol ediniz!"
    })
}

module.exports = errorHandlerMiddleware