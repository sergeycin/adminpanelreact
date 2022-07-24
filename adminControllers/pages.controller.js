const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const {PagesObject,FormsObject} = require('../server')

const router = Router()

const Pages = PagesObject;
const Forms = FormsObject


var dataObject ={
  "Page": Object.keys(Pages),
  "Forms": Object.keys(Forms),
}


  router.get(
    '/all', 
  async (req,res) =>{
    try{
        
     res.json(dataObject)
    }catch(e){
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })
  

  router.post(
    '/modelList', 
  async (req,res) =>{
    try{
      const model = req.body
     
      // console.log(dataObject)

      for(let modelPage in Pages){
        // console.log('IN',Pages[modelPage])
        if(modelPage == String(Object.values(model))){
          console.log('have model')
   
          // const news = new Pages[modelPage]({
          //   title: "First News",
          //   description: "Description",
          //   image: "first.png"
          // })

          // news.save()
         const dataPages = Pages[modelPage].find({title:"First News"})
         console.log(dataPages)
        }

        
      }

      // for (let object of Pages){
      //   console.log(Object.keys(object))
        
        // if(String(object) == String(Object.values(model))){
        //   console.log('have model')
        // }
      // }
    
      console.log(resultData)
     res.json(dataPages)
    }catch(e){
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })
  
  





module.exports = router