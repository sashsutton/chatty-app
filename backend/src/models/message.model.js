import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    senderId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },

    receiverId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    text:{
        type:String,
    },
    image:{
        type:String,
    },
},
    {timestamps: true});

const Message = mongoose.model("Message", messageSchema);
export default Message;

