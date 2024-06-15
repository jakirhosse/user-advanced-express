import express from 'express'
import { deleteById,saveUser,servicesGetUser, updateUser} from '../Services/UserServices'
import validators from '../models/Dto'
import handleValidate from '../middlewar/handleValidate';

const router = express.Router();

const getHandler = async (req, res,next) => {
        try {
          const allUsers = await  servicesGetUser()
          res.send(allUsers)
        }
        catch (error) {
          return next(error,req,res)
        }
        }

        const postHandler = async (req, res,next) => {
                try {
                  const body = req.body
                 const user =await saveUser(body) 
                res.send(user)
                }
                catch (error) {
                  return next(error,req,res)
                }
            }
                
            const putHandler =async (req,res,next) => {
              try {
                const body = req.body 
              const result = await updateUser(body)
              res.send(result)
              }
              catch (error) {
                return next(error,req,res)
              }
            }
            
            
            
            const deleteHandler =async (req,res,next) => {
              try {
                const id = req.params.id
              const query = { _id: id }
              const result = await deleteById(query)
              res.status(200).send(result)
              }
              catch (error) {
               return  next(error,req,res)
              }
        }

        router.get("/get" ,getHandler)
        router.post("/post",handleValidate(validators.userSchema),postHandler)
        router.put("/update", putHandler)
      router.delete("/delete/:id", deleteHandler)

      const configure = (app) => {
        app.use("/user",router)
      }
      export default configure