import { Component } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {
  input: any = {};
  prediction: any | null = null;

  constructor(private http: HttpClient) { }


  fetchData(url:any): Observable<any> {
    // Replace with your API endpoint
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Accept": "application/json"
      })
    }
    return this.http.get<any>(url,httpOptions);
  }
  predictTauxRetard(): void {

    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
  });
   

  
    console.table(this.input);

    const _y = parseFloat(this.input.frais_mission);
    
    this.fetchData(`http://localhost:5000/val/${_y}/val2/${this.input.frais_transport}/val3/${this.input.Duree_prev}/val4/${this.input.Duree_reelle}/val5/${this.input.ecart_delai}`).subscribe(
      response => {
        console.log(response);
        this.prediction = response;
      },
      error => {
        console.error(error);
      }
    );
  }
}
