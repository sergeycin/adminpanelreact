const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const AutoModel  = require('../models/AutoModel')
const TypesAuto  =  require('../models/TypesAutoModel')
const router = Router()

router.get(
    '/', 
  async (req,res) =>{
    try{
       
      dataAutoModel = await AutoModel.find({})
 

    res.json(dataAutoModel)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })

  router.get(
    '/types', 
  async (req,res) =>{
    try{
       
      dataTypes = await TypesAuto.find({})
 

    res.json(dataTypes)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })

module.exports = router