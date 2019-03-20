import { AppError } from './app.error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { NotFoundErrror } from './not-found-error';
import { BadRequestErrror } from './bad-request-error';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:1337/khalid/shop';
   }
  register(post) {
    const fd = new FormData();
    fd.append('signup', JSON.stringify(post));

    return this.http.post(this.url, fd).pipe(
      catchError(this.ErrorHandlerMethod)
    );
  }
  protected ErrorHandlerMethod(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundErrror(error));
    }
    if (error.status === 400) {
      return throwError(new BadRequestErrror(error));
    }
    return throwError(new AppError(error));
  }

}

