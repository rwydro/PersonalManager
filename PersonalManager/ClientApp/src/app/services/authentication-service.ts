import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {AuthenticateUserQuery, AuthenticateUserQueryResult} from './models/authenticationModels';
import {ConfigurationService} from './configuration-service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private configService: ConfigurationService;

  constructor(private httpClient: HttpClient, configService: ConfigurationService ) {
    this.configService = configService;
  }
  public authenticate(query: AuthenticateUserQuery): Observable<AuthenticateUserQueryResult> {
   // const url = `${this.configService.apiBaseUrl}/api/users/authenticate`;
    const url = `https://localhost:5001/api/Users/Authenticate`;
    return this.httpClient.post<AuthenticateUserQueryResult>(url, query);
  }
}

