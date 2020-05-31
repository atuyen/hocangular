import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Constants from '@core/contants';
import { DataService } from './../../../core/services/data.service';
import { NotificationService } from './../../../core/services/notification.service';
import { merge, forkJoin, combineLatest, Subject } from 'rxjs';
import { mergeMap, throttleTime, distinctUntilChanged, switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallApiComponent implements OnInit {
  search$ = new Subject<string>();
  text1 = '';
  text2 = '';


  constructor(
    private notificationService: NotificationService,
    private dataService: DataService
  ) { }


  ngOnInit(): void {
    this.searchFunc();
  }


  // Phan 1: Call 2 api dong thoi,  neu thanh cong  thi show ket qua ra, neu co api loi thi show thong bao loi ,
  // ==> dung forkjoin

  private get2APIDocLap() {
      forkJoin(this.dataService.api1(), this.dataService.api2())
      .subscribe(data => {
         this.text1 = data[0].data;
        this.text2 = data[0].data;
      }, error => {
       this.dataService.handleError(error);
      })
  }



  // Bai toan 2: Call api thu nhat xong, lay ket qua de call api thu 2
  // Dung mergemap
  private get2APITheoThuTu() {
    this.dataService.api1()
    .pipe(
      mergeMap(data1 => this.dataService.api3(data1.data))
    ).subscribe(data3 => {
      console.log(data3);
    }, error => {
      this.dataService.handleError(error);
    })
  }


  // Bai toan 3: call api thu nhat xong, xu ly data, xong call tiep api thu 2
  private get2APITheoThuTu2() {
    this.dataService.api1()
    .pipe(
      mergeMap(data1 => {
        console.log('xu ly data1');
       return this.dataService.api2()
      })
    ).subscribe(data3 => {
      console.log(data3);
    }, error => {
      this.dataService.handleError(error);
    })
  }

  // Bai toan 4: call 2 api xong lay ket qua  de goi tiep api thu 3

  private get3ApiTheoThuTu() {
    forkJoin(this.dataService.api1(), this.dataService.api2())
    .pipe(
      mergeMap(res => {
        const res0 = res[0].data;
        const res1 = res[1].data;
        return this.dataService.api3(`${res0} ${res1}`)
      })
    ).subscribe(
      data3 => console.log(data3),
      error => {
        this.dataService.handleError(error)
      }
    )
  }


  // Bai toan 5: call 1(or n) api xong lay ket qua  de goi tiep 2 api;

  private get4ApiTheoThuTu() {
    forkJoin(this.dataService.api1(), this.dataService.api2())
    .pipe(
      mergeMap(res => {
        const res0 = res[0].data;
        const res1 = res[1].data;
        return forkJoin(this.dataService.api3(res0), this.dataService.api4(res1))
      })
    ).subscribe(
      data34 => console.log(data34),
      error => {
        this.dataService.handleError(error)
      }
    )
  }



  // Bai toan 6: Huy loi goi api da goi truoc do de thay = api khac
  // Ngu canh xu dung: trong o search, khi nguoi dung go chu thu nhat ===> call 1 api, khi nguoi dung goi chu thu 2 ==> lai call api thu 2
  // ==> Mong muon huy api thu nhat di

  private searchFunc() {
    this.search$
    .pipe(
      debounceTime(100), // ===> sau 100ms moi emit gia tri moi nhat ra, de han che bot luong data
      distinctUntilChanged(),
      // ==>Se khong emit ra gia tri neu gia tri ko doi so voi truoc do ,han che viec nguoi dung them roi lai xoa 1 ky tu,
      switchMap(textSearch => this.dataService.api3(textSearch)) // ==> cancel cac emit truoc do
    )
    .subscribe(data => {
      // day la ket qua search  cua api3
      console.log(data);
    })
  }



  private test() {
    this.dataService.api1()
    .subscribe(data => {
        this.dataService.api3(data)
        .subscribe(data2 => {
          console.log( data2);
        })
    })


    // call 2 api , doi 2 api xu ly xong thi lam viec gi do












  }
















}
