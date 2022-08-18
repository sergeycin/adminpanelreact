const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const News  = require('../models/NewNews')
const router = Router()

router.get(
    '/ru', 
  async (req,res) =>{
    try{
      let resultObject = {}
       
    dataNews = await News.find({})
    for(let data of dataNews){
    
        for(let key of Object.keys(data.schema.paths)){
           
            if(!String(key).includes("en")){
              resultData(key)
            }
        }
      
    }

    function resultData(key){
      for(let data of dataNews){
        console.log(data[`${key}`])
      }
    }
    res.json(dataNews)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })


module.exports = router