import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(environment.apiBaseUrl + "/products").toPromise();
  }

  public testObservable() {
    // Create a simple observable
    const myObservable = of(1, 2, 3);

    // Create a complete observer
    const myObserver = {
      next: x => console.log('next value: ' + x),
      error: err => console.log('error: ' + err),
      complete: () => console.log('completed')
    };

    myObservable.subscribe(myObserver);
    myObservable.subscribe((x) => console.log('next from iplicit observer ' + x));

    myObservable
      .pipe(
        map(x => x * 2), // 2, 4, 6
        filter(x => x > 3), // 4, 6
        reduce((accumulator, x) => accumulator + x, 0) // 4 + 6 
      )
      .subscribe(
        (x) => { console.log('next value: ' + x) } // 10
      )
  }
}
