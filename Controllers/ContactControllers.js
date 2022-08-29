const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const ContactsModel = require('../models/ContactsModel')
const router = Router()

router.get(
    '/', 
  async (req,res) =>{
    try{
       
      dataContacts = await ContactsModel.find({})

    res.json(dataContacts)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })


module.exports = router