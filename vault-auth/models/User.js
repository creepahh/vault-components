// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// // Encrypt password before saving
// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// module.exports = mongoose.model('User', UserSchema);

const users = [
    {
        id: 0,
        name: 'name0',
        email: 'mail0@email.com',
    },
    {
        id: 1,
        name: 'name1',
        email: 'mail1@email.com',
    },
    {
        id: 2,
        name: 'name2',
        email: 'mail2@email.com',
    },
    {
        id: 3,
        name: 'name3',
        email: 'mail3@email.com',
    },
];

module.exports = users;