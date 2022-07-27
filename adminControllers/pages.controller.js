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

var CurrentPage; // Текущая используемая страница

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
     

      for(let modelPage in Pages){

        if(modelPage == String(Object.values(model))){
          CurrentPage = Pages[modelPage]
          // const news = new Pages[modelPage]({
          //   title: "First News",
          //   description: "Description",
          //   image: "first.png"
          // })

          // news.save()
        var dataPages = await CurrentPage.find({})
    

        }

        
      }

     res.json(dataPages)
    }catch(e){
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })
  
  

  router.post(
    '/deleteField', 
  async (req,res) =>{
    try{
      
      const currentId = req.body

      const deleteField =  CurrentPage.deleteOne({currentId})

      if(deleteField){
        res.json("Данные успешно удалено")
      }
      else{
        res.json("По данному id поле не найдено")
      }

    }catch(e){
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })


module.exports = router