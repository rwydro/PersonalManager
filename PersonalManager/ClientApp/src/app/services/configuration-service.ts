import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'localhost:5001';
  }

  get apiBaseUrl(): string {
    return this.apiUrl;
  }
}
