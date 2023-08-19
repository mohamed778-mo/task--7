const express=require('express')

const app = express()

const port = process.env.PORT||3000

require('./db/mongoose')

app.use(express.json())

const UsersRouter =require('../scr/routers/users')

app.use(UsersRouter)


app.listen(port,()=>{console.log('all done')})



