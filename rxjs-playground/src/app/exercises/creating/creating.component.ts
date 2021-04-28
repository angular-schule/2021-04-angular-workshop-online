import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/


    function producer(o) {
      o.next(Math.random());
      o.next(2);

      setTimeout(() => o.next(3), 2000);
      setTimeout(() => o.complete(), 4000);
    }

    const observer = {
      next: e => console.log(e),
      error: e => console.error(e),
      complete: () => console.log('C'),
    };

    // producer(observer);

    const myObs$ = new Observable<number>(producer);
    /*myObs$.subscribe(observer);
    myObs$.subscribe(observer);
    myObs$.subscribe(e => this.log(e));*/

    const timerMit3Even$ = timer(2000, 500).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    );    
    
    timerMit3Even$.pipe(map(e => e * 100)).subscribe(
      e => this.log(e),
      err => this.log('ERROR ' + err),
      () => this.log('COMPLETE')
    );


    
    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
