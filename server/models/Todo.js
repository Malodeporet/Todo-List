import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
},
);

export default mongoose.model("Todo", TodoSchema)