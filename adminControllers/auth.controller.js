const {Router} = require('express')
const bcrypt = require('bcryptjs') // шифрование пароля
const config = require('config') // библиотека для использования данных где угодно которые зашиты в файле config.json
const jwt = require('jsonwebtoken') // Современный метод защиты при авторизации пользователя
const {UserObject} = require('../server')
const {check, validationResult} = require('express-validator')
const router = Router()

const User = UserObject;




 
  // /api/auth/login
  router.post(
    '/login', 
    [
      check('email', 'Введите кооректный email').normalizeEmail().isEmail(),
      check('password', 'Введите пароль').exists() //Проверка существует ли пароль
    ],
  async (req,res) =>{
  
    try{
      const errors = validationResult(req)
   
      if(!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе"
        })
      }
      const {email,password} = req.body
     const user = await User.findOne({email}) //Ищем 1 человека по email
  
     if(!user){
       return res.status(400).json({message:'Пользователь не найден'})
     }
  
     const isMatch = await bcrypt.compare(password,user.password)
  
     if(!isMatch){
       return res.status(400).json({message: 'Неверный пароль попробуйте еще раз'})
     }
  
     const token = jwt.sign( // Выдается пользователю во время сесии нужно для безопасности
       {userId: user.id},
       config.get('jwtSecret'),
       {expiresIn: '1h'}
  
     )
     
     res.json({token,userId:user.id})
  
    }catch(e){
        res.status(500).json({message: "Вы точно не right"})
    }
  })
  
  





module.exports = router