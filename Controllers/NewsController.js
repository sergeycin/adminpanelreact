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
    var newobj = []
    for(let data of dataNews){
    
        for(let key of Object.keys(data.schema.paths)){
           
            if(!String(key).includes("en")){
              // console.log(key)
              let object = {}
              object = JSON.parse(data);
              delete object[`${key}`]
              console.log(object)
              // resultData(key)
            }
        }
      
    }
    // const found_names = dataNews.filter(v => v.entitle != "Joe" && v.age < 30);
  
    function resultData(key){

      for(let data of dataNews){
       
        delete data[`${key}`]
         newobj = Object.assign({},newobj,data);
        
     
      
      }
    }
   
  
    // console.log(newArray)
    res.json(dataNews)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })


module.exports = router