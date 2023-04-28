import { Manga } from "../models/Manga.js"

const controller = {
    create: async(req, res) => {
        try{
            const { author_id, company_id, title, cover_photo, description, category_id } = req.body
            const manga = await Manga.create({author_id, company_id, title, cover_photo, description, category_id})
            res.status(201).json({
                success: true,
                message: 'Manga created successfully',
                new_manga: manga
            })
        }
        catch(error){
            console.log(error)
        }
    },
    read: async(req, res) => {
        try{
            const mangas = await Manga.find()
            if(mangas){
                res.status(200).json({
                    success: true,
                    response: mangas
                })
            }else{
                res.status(400).json({
                    success: false,
                    response: 'Mangas not found'
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
}

export default controller