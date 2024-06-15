import Joi from "joi"
const schema = Joi.object().keys(
    {
        name: Joi.string().alphanum().min(5).max(20).required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    }
)

const validate = (data) => {
    const result = schema.validate(data)
    data.dateTime = new Date()
    result.value = data 
    return result
}

export default validate