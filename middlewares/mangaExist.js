import { Manga } from '../models/Manga.js'

const mangaExist = async (req, res, next) => {
    const data = {
        title: req.body.title
    }
    if(req.body.category_id !== 'Insert Category'){
        data.category_id = req.body.category_id
    }
    try{
        const response = await Manga.find(data)
        if (response.length !== 0) {
            res.status(400).json({
                success: false,
                message: [{message: 'Manga title already exist'}]
            })
        }else{
            next()
        }
    }
    catch(error){
        console.log(error);
    }
}

export default mangaExist