import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class RestFitnessServiceService {

  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  wgerUrl = 'http://wger.de/api/v2';
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCategories(): any{
    return this.http.get(this.wgerUrl + '/exercisecategory/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getExercisesByCategory(id): any{
    return this.http.get(this.wgerUrl + '/exercise?category=' + id + '&ordering=id&limit=10')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
