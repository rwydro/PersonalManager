import {Injectable} from '@angular/core';

interface IErrorHandler {
  handleError(): void;
}

@Injectable({
  providedIn: 'platform'
})
 class ErrorHandler implements IErrorHandler{
  handleError(): void {
  }
}
