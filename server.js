const express = require('express')
const config = require('config')
const mongose = require('mongoose')
const path = require('path')
const app = express()
let fs = require('fs');

const PORT =  8000

// app.use(express.json({extended: true}))
//  app.use('/api/auth', require('./routes/auth.routes'))
//  app.use('/api/link',require('./routes/link.routes'))
//  app.use('/t', require('./routes/redirect.routes'))   

// Настройки для delpoy
if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static(`${__dirname}/view/build`));
    // app.use('/admin',express.static(path.join(__dirname,'view', 'build')))

    app.get('/', (req,res)=>{
        res.sendFile(path.resolve(`${__dirname}/view/build/index.html`))
    } )
}

//End settings deploy
// app.get('/',(req,res) => {
//     res.status(200)
//     res.sendFile(path.join(__dirname, 'view/build', 'index.html'))

// })

async function start(){
    try{
     
        
    //    await mongose.connect(config.get('mongoUrl'),{
    //     useNewUrlParser: true, useUnifiedTopology: true
    //    })
       app.listen(8000, (req,res) => console.log(`Server started on PORT${PORT}`))
    
    }catch(e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()