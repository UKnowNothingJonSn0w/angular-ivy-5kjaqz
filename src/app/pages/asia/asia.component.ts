import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css'],
})
export class AsiaComponent implements OnInit {
  public regions = [];
  public isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAsia();
  }

  loadAsia() {
    this.http
      .get<any>('https://restcountries.com/v3.1/region/asia')
      .subscribe((response) => {
        console.log(response);
        this.regions = response;
      });
  }
}
