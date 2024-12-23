import mongoose, { Schema } from "mongoose";

const Questionnaire = mongoose.model('Questionnaire', new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    questionnaireId: {
        type: String,
        required: true
    },
    responses: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}));

export default Questionnaire;