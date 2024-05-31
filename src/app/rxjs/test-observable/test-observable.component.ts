import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
   toastr = inject(ToastrService);
   observable$ = new Observable<number>((observer) => {
   let i = 5;
   const intervalIndex = setInterval(() => {
    if (!i) {
     observer.complete();
     clearInterval(intervalIndex);
    }
    observer.next(i--);
   }, 1000);
  });
  constructor() {
    this.observable$.subscribe((val) => {
      console.log(val);
    });

    this.observable$
    // 5 4 3 2 1
    .pipe(
      map( valeur => valeur * 3)
      // 15 12 9 6 3
    )
    .subscribe({
      next: (valeur) => { this.toastr.info('' + valeur)},
      error: (e) => {},
      complete: () => { this.toastr.warning('BOOOOM!!!!')}
    });
  }

}
