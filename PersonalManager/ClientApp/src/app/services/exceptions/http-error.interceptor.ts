import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {ExceptionsDictionary} from './exceptions-dictionary';


export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)

      .pipe(
        retry(1),

        catchError((error: HttpErrorResponse) => {
          switch (error.error.Data.Name) {
            case ExceptionsDictionary.AuthenticationFailed:{
            }
          }
          return throwError(error);

        })
      );

  }

}
