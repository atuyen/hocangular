import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataService } from '@core/services';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-subcrible-template',
  templateUrl: './subcrible-template.component.html',
  styleUrls: ['./subcrible-template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubcribleTemplateComponent implements OnInit {
  textToDisplay$: Observable<string>;


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
   this.textToDisplay$ = this.dataService.api1()
    .pipe(
      map(res => res.data),
      tap(data => console.log(data))
    )
  }

}
