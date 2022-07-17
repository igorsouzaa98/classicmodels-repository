import {Error, Sequelize} from 'sequelize'

export const sequelize = new Sequelize('classicmodels', 'root', '123456',{
    host:'localhost',
    dialect:'mysql',
    define:{
        freezeTableName:true,
        //  timestamps:false,
        createdAt:false,
        updatedAt:false
    },
    timezone:'-03:00',
    logging:false
})

export default async () =>{
   await sequelize
        .authenticate()
        .then(()=>{
            console.log('Successful  connection')
        })
        .catch((error:Error)=>{
            console.log(`Connection not made: ${error}`)
        })
}