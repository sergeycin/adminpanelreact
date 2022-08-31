const express = require('express')
const config = require('config')
const mongose = require('mongoose')
const path = require('path')
const fileUpload = require("express-fileupload")
const app = express()
const User = require('./models/User')
const News  = require('./models/NewNews')
const TestDriveCar  = require('./models/DriveModel')
const AutoModel  = require('./models/AutoModel')
const MainPage = require('./models/MainPageModel')
const ContactsModel = require('./models/ContactsModel')
const AboutAutoSalon = require('./models/AboutAutoSalon')
const AboutMark = require('./models/AboutMarkModel')
const TypesAuto = require('./models/TypesAutoModel')
let fs = require('fs');

// Текущая директория
exports.directory = `${__dirname}`;

// Модели пользователей
exports.UserObject = User;

// Модели страниц
exports.PagesObject = {
 News,
AutoModel,
MainPage,
ContactsModel,
AboutAutoSalon,
AboutMark,
TypesAuto
}

// Модели форм
exports.FormsObject = {
    TestDriveCar
}

const PORT =  8000
// Роуты для административной панели
app.use(express.json({extended: true}))
app.use(fileUpload({}))
app.use('/api/auth', require('./adminControllers/auth.controller'))
app.use('/api/pages', require('./adminControllers/pages.controller'))
 


// Роуты для клиента
app.use('/api/news', require('./Controllers/NewsController'))
app.use('/api/main', require('./Controllers/MainPageController'))
app.use('/api/contacts', require('./Controllers/ContactControllers'))
app.use('/api/models', require('./Controllers/ModelsController'))
app.use('/api/history', require('./Controllers/historyController'))
app.use('/api/testdrive', require('./Controllers/TestDriveController'))



// Настройки для delpoy
if(process.env.NODE_ENV === 'production'){
    app.use('/admin',express.static(`${__dirname}/adminview/build`));
    app.use('/client',express.static(`${__dirname}/client/build`));
    app.use('/',express.static(`${__dirname}`));


    app.get('/admin', (req,res)=>{
        res.sendFile(path.resolve(`${__dirname}/adminview/build/index.html`))
    } )

    app.get('/', (req,res)=>{
        res.sendFile(path.resolve(`${__dirname}/client/build/index.html`))
    } )
}




async function start(){
    try{
     
        
       await mongose.connect(config.get('mongoUrl'),{
        useNewUrlParser: true, useUnifiedTopology: true
       })
       app.listen(8000, (req,res) => console.log(`Server started on PORT${PORT}`))
      
    
    }catch(e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()