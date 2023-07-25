import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiUrl = 'http://localhost:8080/api/time-conversion'; // Replace with your API endpoint URL (backend server URL)

  constructor(private http: HttpClient) {}

  getTimeConversion() {
    return this.http.get<string>(this.apiUrl);
  }
}
