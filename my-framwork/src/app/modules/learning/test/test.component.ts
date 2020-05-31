import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Constants from '@core/contants';
import { DataService } from './../../../core/services/data.service';
import { NotificationService } from './../../../core/services/notification.service';
import { merge, forkJoin, combineLatest } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  ngOnInit() {

  }

















}
