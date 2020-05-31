import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackByService {
  trackByFn(index, item) {
    return item.id;
  }
}
