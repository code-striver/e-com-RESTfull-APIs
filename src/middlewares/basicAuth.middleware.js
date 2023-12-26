import UserModel from "../features/user/user.model.js";
const basicAuthorizer = (req, res, next)=>{
    const authorizationHeader = req.headers["Authorization"];
    if(!authorizationHeader){
        return res.status(401).send("You are not logged in")
    }
    // extracting credentials in endoded form looks like --> Basic aljdhfbqk32187ynas
    // so first we need to remove "Basic "
    const encodedCredentials = authorizationHeader.replace('Basic ', '')
    console.log(encodedCredentials)
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf8')
    console.log(decodedCredentials)
    const originalCredsInArray = decodedCredentials.split(':')
    const user = UserModel.getAll().find((user)=>user.email == originalCredsInArray[0]
    && user.password == originalCredsInArray[1])
    if(user){
        next()
    }
    else{
       return res.status(401).send('Invalid Credentials')
    }
}
export default basicAuthorizer