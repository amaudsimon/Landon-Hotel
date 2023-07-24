import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WelcomeService } from "./welcome.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  englishWelcomeMessage?: string;
  frenchWelcomeMessage?: string;


  constructor(private httpClient: HttpClient, private welcomeService: WelcomeService) {}

  private usdToCadRate: number = 1.25; // Replace with the actual exchange rate
  private usdToEurRate: number = 0.85; // Replace with the actual exchange rate
  private baseURL: string = 'http://localhost:8080';
  private getUrl: string = this.baseURL + '/room/reservation/v1/';
  private postUrl: string = this.baseURL + '/room/reservation/v1';
  public submitted!: boolean;
  roomsearch!: FormGroup;
  rooms!: Room[];
  request!: ReserveRoomRequest;
  currentCheckInVal!: string;
  currentCheckOutVal!: string;

  ngOnInit() {
    this.roomsearch = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    });

    this.getWelcomeMessages();

    const roomsearchValueChanges$ = this.roomsearch.valueChanges;
    roomsearchValueChanges$.subscribe(x => {
      this.currentCheckInVal = x.checkin;
      this.currentCheckOutVal = x.checkout;
    });
  }

  onSubmit({value, valid}: {value: Roomsearch, valid: boolean}) {
    this.getAll().subscribe(
      rooms => {
        console.log(Object.values(rooms)[0]);
        this.rooms = <Room[]>Object.values(rooms)[0];
      }
    );
  }

  reserveRoom(value: string) {
    this.request = new ReserveRoomRequest(value, this.currentCheckInVal, this.currentCheckOutVal);
    this.createReservation(this.request);
  }

  createReservation(body: ReserveRoomRequest) {
    let bodyString = JSON.stringify(body); // Stringify payload

    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    };

    this.httpClient.post(this.postUrl, body, options)
      .subscribe(res => console.log(res));
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL + '/room/reservation/v1?checkin=' + this.currentCheckInVal + '&checkout=' + this.currentCheckOutVal, {responseType: 'json'});
  }

  getWelcomeMessages() {
    // Call the service to get the welcome messages for English and French
    this.welcomeService.getWelcomeMessage('en', 'US').subscribe(
      (response: any) => {
        this.englishWelcomeMessage = response;
      },
      (error: any) => {
        console.error('Error fetching English welcome message:', error);
      }
    );

    this.welcomeService.getWelcomeMessage('fr', 'CA').subscribe(
      (response: any) => {
        this.frenchWelcomeMessage = response;
      },
      (error: any) => {
        console.error('Error fetching French welcome message:', error);
      }
    );
  }
  // Function to convert USD to CAD
  convertToCAD(price: string): number {
    const priceUSD = parseFloat(price);
    return priceUSD * this.usdToCadRate;
  }

  // Function to convert USD to EUR
  convertToEUR(price: string): number {
    const priceUSD = parseFloat(price);
    return priceUSD * this.usdToEurRate;
  }
}

export interface Roomsearch {
  checkin: string;
  checkout: string;
}

export interface Room {
  id: string;
  roomNumber: string;
  price: string;
  links: string;
}

export class ReserveRoomRequest {
  roomId: string;
  checkin: string;
  checkout: string;

  constructor(roomId: string, checkin: string, checkout: string) {
    this.roomId = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}


/*
var ROOMS: Room[]=[
  {
  "id": "13932123",
  "roomNumber" : "409",
  "price" :"20",
  "links" : ""
},
{
  "id": "139324444",
  "roomNumber" : "509",
  "price" :"30",
  "links" : ""
},
{
  "id": "139324888",
  "roomNumber" : "609",
  "price" :"40",
  "links" : ""
}
] */

