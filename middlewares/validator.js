const validator = (schema) => [
    (req, res, next) => {
        const data = schema.validate(req.body, {abortEarly:false})
        //validate: valida el schema con el body devuelve obj
        if(data.error){
            return res.status(400).json({
                success: false,
                message: data.error.details
            })
        }
        next()
    }
]

export default validator