import {Schema, model} from 'mongoose'; 

// typescriptlang.org/docs/handbook/2/objects.html
interface Quiz {
    title: string;
    description?: string; 
    contentType: 'video' | 'text' | 'image'; //heter union types: https://www.typescriptlang.org/static/TypeScript%20Types-ae199d69aeecf7d4a2704a528d0fd3f9.png
    status: 'draft' | 'published' | 'unavailable';
}

//https://mongoosejs.com/docs/guide.html
// https://medium.com/@felixpratama242/crud-using-express-js-typescript-and-mongodb-0504b2617bf1
const quizSchema = new Schema<Quiz>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    contentType: {
        type: String,
        enum: ['video', 'text', 'image'],
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

export const QuizModel = model<Quiz>('Quiz', quizSchema);