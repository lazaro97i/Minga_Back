import { Category } from "../models/Category.js"
import { User } from "../models/User.js"

const controller = {
    create: async(req, res) => {
        try{
            const {name,ranking,examples,detail,user_id} = req.body
            let category = await Category.create({name,ranking,examples,detail,user_id})
            res.status(201).json({
                success: true,
                response: "done",
                new_category: category
            })
        }catch(error){
            console.log(error)
        }
    }, // controla la creacion de la categoria
    read: async(req, res) => {
        try{ // se intenta hacer algo
            let categories = await Category.find()
            if(categories){
                res.status(200).json({
                    success: true,
                    response: categories
                })
            }else{
                res.status(404).json({
                    success: false,
                    response: "Categories not found"
                })
            }
        }catch(error){ // se catchea cualquier error
            console.log(error)
        }
    }, // controla la lectura de la cat (filtros x ej)
    one: async(req, res) => {
        try{
            const {category_id} = req.params
            let category = await Category.findById(category_id).populate("user_id")
            if(category){
                res.status(200).json({
                    success: true,
                    response: category
                })
            }else{
                res.status(404).json({
                    success: false,
                    response: "Category not found"
                })
            }
        }catch(error){
            console.log(error)
        }
    }, // derivacion del read(solo busca UNA cat)
    update: async(req, res) => {
        try{
            const {id} = req.params
            let category = await Category.findOneAndUpdate(
                {_id: id},
                req.body,
                {new: true}
            )
            res.status(200).json({
                success: true,
                response: "Category updated",
                updated_category: category
            })
        }catch(error){
            console.log(error)
        }
    }, // controla la actualizacion de la cat
    destroy: async(req, res) => {
        try{
            const {id} = req.params
            let category = await Category.findByIdAndDelete(id)
            res.status(200).json({
                success: true,
                response: "Category deleted"
            })
        }catch(error){
            console.log(error)
        }
    } // controla la eliminacion de la cat
}

export default controller