import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css'],
})
export class AmericaComponent implements OnInit {
  public regions = [];
  public isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAmerica();
  }

  loadAmerica() {
    this.http
      .get<any>('https://restcountries.com/v3.1/subregion/america')
      .subscribe((response) => {
        console.log(response);
        this.regions = response;
      });
  }
}
