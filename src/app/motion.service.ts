import { Injectable } from '@angular/core';
import { Motion } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MotionService {

  private _alpha$ = new BehaviorSubject(null);
  alpha$ = this._alpha$.asObservable();

  constructor() { }

  initOrientationEvent(){
    Motion.addListener('orientation', event =>{
      
      this._alpha$.next(event.alpha);
      console.log('event', this._alpha$.value);
    })
  }
}
