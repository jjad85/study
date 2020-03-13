class NotAuthException extends Error{
    constructor(){
        super("Usuario no autorizado");
        this.status = 401;
    };
};

module.exports = NotAuthException;