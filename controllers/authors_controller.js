import { Author } from '../models/Author.js'

const controller = {
    create: async(req, res) => {
        try{
            const {name, last_name, city, country, data, photo, user_id, active=true} = req.body
            let author = await Author.create({name, last_name, city, country, data, photo, user_id, active})
            res.status(201).json({
                success: true,
                response: 'done',
                new_author: author
            })
        }
        catch(error){
            console.log(error);
        }
    },
    read: async(req, res) => {
        try{
            const authors = await Author.find()
            if(authors){
                res.status(200).json({
                    success: true,
                    response: authors
                })
            }else{
                res.status(404).json({
                    success: false,
                    response: 'Not Found'
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
}

export default controller