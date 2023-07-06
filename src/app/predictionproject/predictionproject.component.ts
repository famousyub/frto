import { Component } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-predictionproject',
  templateUrl: './predictionproject.component.html',
  styleUrls: ['./predictionproject.component.css']
})
export class PredictionprojectComponent {


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

    const _y = parseFloat(this.input.val1);
    
    this.fetchData(`http://localhost:5000/p/${this.input.val1}/vl/${this.input.val2}/vl/${this.input.val3}`).subscribe(
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
