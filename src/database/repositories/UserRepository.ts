import User, {UserAttributes} from "../models/UserModel";
import AppError from "../../utils/AppError";
import paymentsModel from "../models/PaymentsModel";

export const findById = async (email: string):Promise<UserAttributes> =>{
    const user = await User.findByPk(email)

    if (!user){
        throw new AppError('NotFound', 'User not found', 404)
    }
    return user
}

export const create  = async (payload: UserAttributes):Promise<UserAttributes> =>{
    const {email} = payload
    const user = await User.findByPk(email)

    if(user){
        throw new AppError('UserConflict', 'User exist', 409)
    }

    return await User.create(payload)
}