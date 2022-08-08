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
      // console.log(requestField)
           const newField = new CurrentPage(requestField)


          newField.save()
          
          res.json({message: 'Данные успешно добавлены'})
          
    }catch(e){
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })


  router.post(
    '/sendimage', 
    async (req, res) =>{
      try {
          const file = req.files.file

          const parent = await File.findOne({user: req.user.id, _id: req.body.parent})
          const user = await User.findOne({_id: req.user.id})

          if (user.usedSpace + file.size > user.diskSpace) {
              return res.status(400).json({message: 'There no space on the disk'})
          }

          user.usedSpace = user.usedSpace + file.size

          let path;
          if (parent) {
              path = `${config.get('filePath')}\\${user._id}\\${parent.path}\\${file.name}`
          } else {
              path = `${config.get('filePath')}\\${user._id}\\${file.name}`
          }

          if (fs.existsSync(path)) {
              return res.status(400).json({message: 'File already exist'})
          }
          file.mv(path)

          const type = file.name.split('.').pop()
          const dbFile = new File({
              name: file.name,
              type,
              size: file.size,
              path: parent?.path,
              parent: parent?._id,
              user: user._id
          })

          await dbFile.save()
          await user.save()

          res.json(dbFile)
      } catch (e) {
          console.log(e)
          return res.status(500).json({message: "Upload error"})
      }
  }

  
  
  )

module.exports = router