import { AppError } from './app.error';
export class BadRequestErrror extends AppError {
    constructor(error) {
        super(error);
    }
}
