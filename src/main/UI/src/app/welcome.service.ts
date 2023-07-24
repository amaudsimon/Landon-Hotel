import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private apiUrl = 'http://localhost:8080/welcome'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getWelcomeMessage(language: string, country: string) {
    return this.http.get<string>(this.apiUrl, {
      params: { language, country }
    });
  }
}
