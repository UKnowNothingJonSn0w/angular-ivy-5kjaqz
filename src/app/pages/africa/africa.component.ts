import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css'],
})
export class AfricaComponent implements OnInit {
  public regions = [];
  public isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAfrica();
  }
  loadAfrica() {
    this.http
      .get<any>('https://restcountries.com/v2/region/africa')
      .subscribe((response) => {
        // console.log(response);
        this.regions = response;
      });
  }
}
