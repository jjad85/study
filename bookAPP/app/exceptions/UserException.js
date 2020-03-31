class UserExistsException extends Error {
	constructor(mssg) {
		super(mssg);
		this.status = 401;
	}
}

module.exports = UserExistsException;
