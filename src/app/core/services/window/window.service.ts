import { Injectable } from '@angular/core';

const _window: any = window;

@Injectable()
export class WindowService {
  nativeWindow: any = _window;
}
