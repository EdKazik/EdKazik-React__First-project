class UserController {
    
    getLogin = async (request, response) => {

        const { login, password } = request.body;
        
        if (login === "qwerty" && password === "777") {
            
            response.send({ ...request.body, jwt: 'qwertyuio4567890zxcvbnm'})
        } 
    }
}
module.exports = new UserController();