const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const MainPAge  = require('../models/MainPageModel')
const router = Router()

router.get(
    '/', 
  async (req,res) =>{
    try{
       
      dataMain = await MainPAge.find({})

    res.json(dataMain)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })


module.exports = router