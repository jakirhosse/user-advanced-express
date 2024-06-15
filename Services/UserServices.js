import modles from "../models";
import { NotFound } from "../Utils/Error";

export const saveUser = async(user) => {
        try {
            const model = await new modles.user(user)
            const saveUser = model.save()
            return saveUser
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }

    export const servicesGetUser = async () => {
        try {
           const users = modles.user
           const user = await users.find()
          return user
        }
        catch (error) {
            throw error
        }
   }


   export const updateUser = async (user) => {
        const id = user._id 
        const users = models.user 
        let model = await users.findById(id)
        if (model) {
            model.name = user.name
            model.email = user.email
            model.save()
            return model
        }
       throw new NotFound("Update Not Found"+ id)
    }

    export const deleteById = async(id) => {
        const users = models.user 
        const model = await users.findOne(id)
        if (model) {
            const result = await users.deleteOne(id)
            return result
        }
       throw new NotFound("user Not Found"+ id._id)
    }