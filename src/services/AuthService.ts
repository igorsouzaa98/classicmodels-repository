import * as repository from '../database/repositories/UserRepository'
import {UserAttributes} from "../database/models/UserModel";
import AppError from "../utils/AppError";
// @ts-ignore
import jwt from 'jsonwebtoken'
import {secret} from  '../config/auth.config'

export const signUp = async (payload: UserAttributes): Promise<UserAttributes>=>{
    return await repository.create(payload)
}

export const singIn = async ({email, password}: UserAttributes): Promise<{token: string}> =>{
    const token = jwt.sign({
        email: email
    },
        secret,
        {expiresIn: '24h'}
    )

   try{
       const user =  await repository.findById(email)

       if(password === user.password){
           return {token: token}
       }else{
           throw new Error()
       }
   } catch (error){
       throw new AppError('Not authorized', 'Incorrect username or password', 409)
   }
}