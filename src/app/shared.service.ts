import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  globalVar:string;
  globalVarUpdate:Observable<string>;
  globalVarObserver:Observer<any>;

  constructor() {
    this.globalVarUpdate = Observable.create((observer:Observer<any>) => {
      this.globalVarObserver = observer;
    });
  }

  updateGlobalVar(newValue:string) {
    this.globalVar = newValue;
    this.globalVarObserver.next(this.globalVar);
  }
}
