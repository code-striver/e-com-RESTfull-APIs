import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken'
export default class UserController{
    signUp(req, res){
        const {name, email, password, type} = req.body;
        const user = UserModel.signUp(name, email, password, type)
        res.status(201).send(user)

    }
    loginUser(req, res){
        const {email, password} = req.body;
        const verifiedUser = UserModel.signIn(email, password);
        if(!verifiedUser){
            res.status(400).send('Incorrect Credentials')
        }else{
            //creating JWT for successful login
           const token = jwt.sign({UserID:verifiedUser.id, 
            email:verifiedUser.email}, 'gAmhmrCfWSl9CdRuFZ6SIS1zYXohdmjH', {
                algorithm:'HS256',
                expiresIn: '1h'
            })
            res.status(200).send(token)
        }
    }

}