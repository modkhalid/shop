import { AppError } from './app.error';
export class NotFoundErrror extends AppError {
    constructor(error) {
        super(error);
    }
}
