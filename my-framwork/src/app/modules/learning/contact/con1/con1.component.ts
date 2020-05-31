import { Events } from './../../../../core/services/event-bus.service';
import { EventBusService, EmitEvent } from '@core/services';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-con1',
  templateUrl: './con1.component.html',
  styleUrls: ['./con1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Con1Component implements OnInit {

  constructor(private bustEventService: EventBusService) { }

  ngOnInit(): void {
  }

  senData() {
    this.bustEventService.emit(new EmitEvent(
       Events.sendData,
       5
    ))
  }

}
