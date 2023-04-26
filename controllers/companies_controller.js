import { Company } from '../models/Company.js'

const controller =  {
    create: async(req, res) => {
        const {name, logo, website, description, user_id='6414c441f8845dbab347bde9'} = req.body
        try{
            const company = await Company.create({name, logo, website, description, user_id})
            res.status(201).json({
                success: true,
                response: 'done',
                new_company: company
            })
        }
        catch(error){
            console.log(error);
        }
    },
    read: async(req, res) => {
        try{
            const companies = await Company.find()
            if(companies){
                res.status(200).json({
                    success: true,
                    response: companies
                })
            }else{
                res.status(400).json({
                    success: false,
                    response: 'Companies not found'
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
}

export default controller