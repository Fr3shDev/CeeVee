import mongoose from "mongoose";

export interface QuestionnaireInterface {
    userId: mongoose.Schema.Types.ObjectId;
    questionnaireId: string;
    responses: Record<string, string>;
    createdAt: Date;
    updatedAt: Date;
}