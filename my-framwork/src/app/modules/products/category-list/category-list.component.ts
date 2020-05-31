import { Events } from '@core/services/event-bus.service';
import { Observable, Subscription } from 'rxjs';
import { PagingResponse } from '@core/models/response/paging-response.model';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import * as Constants from '@core/contants';
import { DataService, TrackByService, EventBusService } from '@core/services';
import { Category } from '@core/models';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryListComponent implements OnInit, OnDestroy {
  categoriesData$;
  data = [];
  seachSub: Subscription;


  constructor(private dataService: DataService,
    public trackbyService: TrackByService,
    private eventBusService: EventBusService) {}



  ngOnInit(): void {
    this.getCategoryList();

    this.seachSub = this.eventBusService.on(Events.searchData, (data) => {
      this.searchData(data)
    })

  }

  private getCategoryList() {
   this.categoriesData$ = this.dataService.getPaging<Category>(`${Constants.Api.CATEGORY_LIST}/paging`)
    .subscribe(
      (response => {
        this.data = response.data;
        return response
      }),
      (error) => this.dataService.handleError(error)
    )
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  private searchData(textSearch: string) {
    console.log('seach trong category ' + textSearch);

  }

  ngOnDestroy(): void {
    this.categoriesData$.unsubscribe();
    this.seachSub.unsubscribe();
  }


}
