import { ErrorType } from '../models/error';

export class Request {
    statut: Number

    constructor() {
        this.statut = null;

    }
}
export class SuccesRequest extends Request {
    content: any
    constructor(content) {
        super();
        this.statut = 200;
        this.content = content;
    }
}
export class ErrorRequest extends Request {
    exception: String
    constructor(exception: ErrorType) {
        super()
        this.statut = exception.id;
        this.exception = exception.exception;
    }
}