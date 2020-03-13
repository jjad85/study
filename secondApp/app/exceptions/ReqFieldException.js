class ReqFieldException extends Error{
    constructor(field){
        super(field + " es requerido");
        this.status = 404;
    };
};

module.exports = ReqFieldException;