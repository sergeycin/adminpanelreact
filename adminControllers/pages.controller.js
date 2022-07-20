const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const {PagesObject,FormsObject} = require('../server')

const router = Router()

const Pages = PagesObject;
const Forms = FormsObject



  // /api/auth/login
  router.get(
    '/all', 
  async (req,res) =>{
    try{

        let dataObject ={
            "Page": Object.keys(Pages),
            "Forms": Object.keys(Forms),
        }
        
     res.json(dataObject)
    }catch(e){
        res.status(500).json({message: "Вы точно не right"})
    }
  })
  
  





module.exports = router