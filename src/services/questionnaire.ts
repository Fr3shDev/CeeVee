import { QuestionnaireInterface } from "interfaces/questionnaire.interface";
import Questionnaire from "../models/questionnaire";

class QuestionnaireService {
    async saveResponses(
        userId: string,
        responses: Record<string, string>,
    ): Promise<QuestionnaireInterface> {
        const questionnaireId = `qn-${Date.now()}`;     // Generate a unique ID for the questionnaire
        const questionnaire = new Questionnaire({
            userId,
            questionnaireId,
            responses
        });

        return await questionnaire.save();
    }

    // Retrieve user responses
    async getResponses(userId: string): Promise<QuestionnaireInterface[]> {
        return await Questionnaire.find({ userId});
    }
}

export default new QuestionnaireService();