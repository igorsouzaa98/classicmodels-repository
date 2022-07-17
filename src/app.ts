// @ts-ignore
import express, {Express, NextFunction, Request, Response} from 'express'
import 'express-async-errors'
// @ts-ignore
import bodyParse from 'body-parser'
import connection from './database/sequelize'
// @ts-ignore
import routes from './api/routes/index'
import AppError from './utils/AppError'
import {errors} from 'celebrate'
import {initdb} from './database/initdb'



const app:Express = express()
const port:number = 4467

app.use(bodyParse.json())

app.use('/api/v1', routes)

app.get('/', (req:Request, res:Response)=>{
    res.send('Hello World Express and TypeScript!')
})

app.use(errors())

app.use((err:AppError, req:Request, res:Response, next:NextFunction)=>{
    console.log(err)
    try{
        res.status(err.getHttpCode()).send(err.getError())
    }catch(error){
        const appError = new AppError(
            'InternalServerError',
            'Internal Server Error',
            500
        )
        res.status(500).send(appError.getError())
    }
})
app.listen(port, ()=>{
    console.log(`Server live on port ${port}`)
})

initdb()