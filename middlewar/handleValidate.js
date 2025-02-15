
import { BadRequest } from "../Utils/Error";
 export const handleValidate = ({validate}) => {
        return (req, res, next) => {
                const result = validate(req.body)
                const isValid = result.error == null 
                if (isValid) {
                   return next()
                }
                const { details } = result.error 
                const message = details?.map(e => e.message)
                const msg = message.join(",")
                throw new BadRequest(msg)
            }
};

export default handleValidate;