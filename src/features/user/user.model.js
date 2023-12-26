
export default class UserModel{
    constructor(id, name, email, password, type){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type
    }
    static signUp(name, email, password, type){
        const newUser = new UserModel(users.length +1 ,name, email, password, type)
        users.push(newUser)
        return newUser
    }
    static signIn(email, password){
       const foundUser = users.find((user)=> user.email == email&& user.password == password)
       return foundUser;
    }
    static getAll(){
        return users
    }
} 
var users = [
    {
        id: 1,
        name: "seller User",
        email: "seller@ecom.com",
        password:'password1',
        type: 'seller'
    },
    {
        id: 2,
        name: "customer User",
        email: "customer@ecom.com",
        password:'password1',
        type: 'customer'
    }
]