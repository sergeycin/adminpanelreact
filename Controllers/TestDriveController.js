const {Router} = require('express')
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const TestDrive  = require('../models/DriveModel')
const router = Router()


router.post(
    '/', 
  async (req,res) =>{
    try{
      const model = req.body
        

          const testdrive = new TestDrive({
            fio: model.fio,
            date: model.date,
            time: model.time,
            phone: model.phone,
            email: model.email,
            car: model.car
          })

         await testdrive.save()

  
  
     res.json({message: 'Данные успешно отправлены'})
    }catch(e){
      console.log(e,'eror')
      res.status(500).json({message: "Что-то пошло не так"})      
    }
  })


  
module.exports = router
  