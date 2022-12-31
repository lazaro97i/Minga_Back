import {User} from "../models/User.js"

const controller = {
    create: async(req, res) =>{},
    read: async(req, res) =>{
        try{
            let users = await User.find()
            res.status(200).json({
                success: true,
                response: users,
                propiedad: "cualquier propiedad que se quiera mostrar"
            })
        }catch(error){ 

        }
    },
    one: async(req, res) =>{},
    update: async(req, res) =>{},
    destroy: async(req, res) =>{}
}

export default controller