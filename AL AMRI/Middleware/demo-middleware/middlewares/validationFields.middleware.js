const validationFields = fileds => {
    return (req, res, next) => {

        const missingFields = fileds.filter(field => !req.body[field]);
        console.log(missingFields);

        if (missingFields.length > 0) {
            return res.status(400).json({
                message: "Champs manquants",
                missingFields
            });
        }

        next();
    }
}

module.exports = validationFields;