const { Schema, model, Types } = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        thoughts: {
            //array of _id values referencing thought model
        },
        friends: {
            //array of _id values referencing the User model (self-reference)
        }
    }
);

// does this go here?
UserSchema.virtual('friendCount').get(function() {
    return // returns length of the users friends array field on query
})