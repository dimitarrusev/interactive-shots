import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type ShotSize = null | 'oneX' | 'twoX';

@Injectable()
export class ShotService {
  private shotSize: BehaviorSubject<ShotSize> = new BehaviorSubject<ShotSize>(null);
  public readonly shotSize$: Observable<ShotSize> = this.shotSize.asObservable();

  constructor() { }

  getShotSize(): ShotSize {
    return this.shotSize.getValue();
  }

  setShotSize(shotSize: ShotSize) {
    this.shotSize.next(shotSize);
  }

  toggleShotSize() {
    (this.getShotSize() === 'oneX')
      ? this.setShotSize('twoX')
      : this.setShotSize('oneX');
  }
}
