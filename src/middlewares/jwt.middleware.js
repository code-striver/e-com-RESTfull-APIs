import jwt from 'jsonwebtoken'
const jwtAuth = (req, res,  next)=>{
    //1. read the token
    const token = req.headers["authorization"];

    //2. check if token is there or not
    if(!token){
        return res.status(401).send('You are not logged in!!!')
    }
    
    //3. if token is present check if it is valid
    try{
    const payload = jwt.verify(token, "gAmhmrCfWSl9CdRuFZ6SIS1zYXohdmjH")
    req.userID = payload.UserID
    }catch(err){
        console.log(err)
        return res.status(401).send('Unauthorized access')
    }
    //4. if token is valid call the nex MW
    next()
    //5. else return error done on line number 14
    
}

export default jwtAuth