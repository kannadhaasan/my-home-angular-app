import { Injectable } from '@angular/core';
import { Properties } from '../types/properties';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyHomeService {

  public propertyList: Array<Properties> = new Array<Properties>();

  constructor(private http: HttpClient
  ) { }

  public getProperties(): Observable<Array<Properties>>{
    const url = environment.myHomeProperties;
    let propertyLists: Array<Properties> = new Array<Properties>();
      return Observable.create(observer => {
        this.http.get(
          url, {observe: 'body'}
        ).subscribe(
          (result: Array<Properties>)=> {
            result.forEach((prop: Properties) => {
              propertyLists.push(prop);
            });
            observer.next(propertyLists);
            observer.complete();
          },
          (error) => {
            console.log(JSON.stringify(error));
            observer.error(error);
            observer.complete();
          }
          );
      });
    }

    public getPhotos(id: any): Observable<Array<Properties>>{
      const url = environment.myHomeProperties;
      let photos = [];

      return Observable.create(observer => {
        this.http.get(
          url, {observe: 'body'}
        ).subscribe(
          (result: Array<Properties>)=> {
            result = result.filter(x => x.propertyId == id);
            result.forEach( filteredRes => {
              photos = filteredRes.photos
            })
            observer.next(photos);
            observer.complete();
          },
          (error) => {
            console.log(JSON.stringify(error));
            observer.error(error);
            observer.complete();
          }
          );
      });    
    }
}
