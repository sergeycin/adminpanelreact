const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const {PagesObject,FormsObject,directory} = require('../server')
let fs = require('fs');
const TestDrive  = require('../models/TestDriveForm')
const router = Router()
// const config = require('config')

const Pages = PagesObject;
const Forms = FormsObject


var dataObject ={
  "Page": Object.keys(Pages),
  "Forms": Object.keys(Forms),
}

var CurrentPage; // Текущая используемая страница
var currentPathImage;
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
     
      var dataPages;
      var dataTitles;
      for(let modelPage in Pages){

        if(modelPage == String(Object.values(model))){
          CurrentPage = Pages[modelPage]
          dataTitles = Object.keys(Pages[modelPage].schema.paths)
          // const news = new Pages[modelPage]({
          //   title: "Three News",
          //   description: "Description",
          //   image: "first.png"
          // })

          // news.save()
         dataPages = await CurrentPage.find({})
    

        }

        
      }



      for(let modelForm in Forms){
        if(modelForm == String(Object.values(model))){
      CurrentPage = Pages[modelForm]
      dataTitles = Object.keys(TestDrive.schema.paths)
          // console.log(modelForm,'curentform')
          // const news = new TestDrive({
          //   name: "Sergey",
          //   email: "newphone@mail.ru",
          //   phone: "+7(978)-999-99-99"
          // })

          // news.save()

      dataPages = await TestDrive.find({})
    }
    }
    let resultData = {
      'titles': dataTitles,
      'dataFields': dataPages
    }
     res.json(resultData)
    }catch(e){
      console.log(e,'eror')
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
      if(requestField.hasOwnProperty('image')){
        requestField.image = currentPathImage
        const newField = new CurrentPage(requestField)
        newField.save()
      }
      else{
        const newField = new CurrentPage(requestField)
        newField.save()
          
      }
         
          res.json({message: 'Данные успешно добавлены'})
          
    }catch(e){
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })




  router.post(
    '/sendimage', 
    async (req, res) =>{
      try {
        console.log(req.files)
          const file = req.files.file
          let path;
      
              path = `${directory}/uploads/${file.name}`
              // console.log('путь к папке', `${directory}\\uploads\\${file.name}`)
    
          if (fs.existsSync(path)) {
              return res.status(400).json({message: 'File already exist'})
          }
          file.mv(path)
          currentPathImage = `./uploads${file.name}` 
   

          res.json('ok')
      } catch (e) {
          console.log(e)
          return res.status(500).json({message: "Upload error"})
      }
  }

  
  
  )

module.exports = router