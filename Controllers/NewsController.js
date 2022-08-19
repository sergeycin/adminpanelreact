const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const News  = require('../models/NewNews')
const router = Router()

router.get(
    '/ru', 
  async (req,res) =>{
    try{
      let resultObject = {}
       
    dataNews = await News.find({}).select('rutitle rudescription image');
   

    // console.log(dataNews)
  
    // console.log(newArray)
    res.json(dataNews)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })


module.exports = router