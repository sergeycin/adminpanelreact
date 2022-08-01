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
          //   title: "Three News",
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
      CurrentPage.deleteOne(currentId).then(function(){
        res.json("Данные успешно удалено")
    }).catch(function(error){
      res.json("По данному id поле не найдено",error)
    });

    }catch(e){
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })


  router.post(
    '/createField', 
  async (req,res) =>{
    try{
      const requestField = req.body

           const newField = new CurrentPage({
            title: requestField.title,
            description: requestField.description,
            image: requestField.image
          })

          newField.save()
     
    }catch(e){
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })

module.exports = router