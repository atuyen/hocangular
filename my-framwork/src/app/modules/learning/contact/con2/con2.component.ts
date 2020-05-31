import { EventBusService, Events } from './../../../../core/services/event-bus.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-con2',
  templateUrl: './con2.component.html',
  styleUrls: ['./con2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Con2Component implements OnInit, OnDestroy {

  sendDataSub: Subscription;
  seachSub: Subscription;


  constructor(private eventBusService: EventBusService) { }


  ngOnInit(): void {
    this.sendDataSub = this.eventBusService.on(Events.sendData, (data) => {
      this.handleData(data)
    })

    this.seachSub = this.eventBusService.on(Events.searchData, (data) => {
      this.searchData(data)
    })


  }


  private handleData(data: string) {
    console.log(data);
  }

  private searchData(textSearch: string) {
    console.log('seach trong con1 ' + textSearch);

  }


  ngOnDestroy(): void {
    this.sendDataSub.unsubscribe();
    this.seachSub.unsubscribe();
  }


}
