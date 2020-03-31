class UserExistsException extends Error {
    constructor(mssg, status) {
        super(mssg);
        this.status = status;
    }
}

module.exports = UserExistsException;
