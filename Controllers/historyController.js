const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const AboutAutoSalonModel = require('../models/AboutAutoSalon')
const router = Router()

router.get(
    '/autosalon', 
  async (req,res) =>{
    try{
       
      dataautosalon = await AboutAutoSalonModel.find({})

    res.json(dataautosalon)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })


module.exports = router
