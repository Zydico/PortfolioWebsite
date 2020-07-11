import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FileHandlerService {

    constructor(private http: HttpClient) { }

    readFile(url: string): Observable<string[]> {
        return this.http.get(url, {responseType: 'text'}).pipe(map(data => {
            return data.split('\n');
        }));
    }

}
