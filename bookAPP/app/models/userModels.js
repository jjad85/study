const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    favoritos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'book'
        }
    ]
});

UserSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.methods.comparePassword = async function (password) {
    let result = await bcrypt.compare(password, this.password);
    return result;
};

UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    return next();
});

UserSchema.pre('updateOne', async function (next) {
    if (this._update.$set && this._update.$set.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(
            this._update.$set.password,
            salt
        );
        this._update.$set.password = hashedPassword;
    }
    return next();
});

mongoose.model('user', UserSchema);
module.exports = mongoose.model('user');
